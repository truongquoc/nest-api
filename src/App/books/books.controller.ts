import {
  Crud,
  Override,
  ParsedRequest,
  CrudRequest,
  ParsedBody,
} from '@nestjsx/crud';
import { Book } from '../../entity/book.entity';
import {
  Controller,
  Get,
  HttpException,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Body,
  Put,
  Patch,
  UseGuards,
  Param,
  Post,
} from '@nestjs/common';
import { BaseController } from 'src/common/Base/base.controller';
import { BooksService } from './books.service';
import { BookRepository } from './book.repository';
import { Not, IsNull, DeepPartial, getManager, Connection } from 'typeorm';
import { AuthGuard } from '../auth/auth.guard';
import moment = require('moment');
import slugify from 'slugify';
import { Tag } from 'src/entity/tag.entity';
import { PriceRepository } from './price.repository';
import { AuthorRepository } from './author.repository';
import { ACGuard, UseRoles } from 'nest-access-control';
import { BookDTO } from './book.dto';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { UserRepository } from '../users/user.repository';
@Crud({
  model: {
    type: Book,
  },
  params: {
    slug: {
      field: 'slug',
      type: 'string',
      primary: true,
    },
    id: {
      type: 'number',
      field: 'id',
      primary: true,
    },
  },
  query: {
    filter: [],
    join: {
      author: {
        eager: true,
        exclude: ['createdAt', 'updatedAt'],
      },

      prices: {
        eager: true,
        exclude: ['createdAt', 'updatedAt'],
      },
      tags: {
        eager: true,
        exclude: ['createdAt', 'updatedAt'],
      },
      category: {
        eager: true,
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  },
  routes: {},
})
@ApiTags('v1/books')
@Controller('/api/v1/books')
export class BooksController extends BaseController<Book> {
  constructor(
    public service: BooksService,
    private readonly repository: BookRepository,
    private readonly priceRepository: PriceRepository,
    private readonly authorRepository: AuthorRepository,
    private readonly bookRepository: BookRepository,
    private readonly userRepository: UserRepository,
    private connection: Connection,
  ) {
    super(repository);
  }

  getSlug(slug: string) {
    const now = moment();

    return slugify(slug, {
      replacement: '-', // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: false, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      locale: 'vi',
    });
  }
  @Override('createOneBase')
  // @UseGuards(AuthGuard, ACGuard)
  // @UseRoles({
  //   resource: 'book',
  //   action: 'create',
  //   possession: 'any',
  // })
  async CreateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: DeepPartial<Book>,
  ) {
    console.log(dto);
    if (!dto.format['f1'] && !dto.format['f2'] && !dto.format['f3']) {
      throw new HttpException(
        {
          message: 'Price is Empty',
          status: HttpStatus.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    try {
      dto.slug = this.getSlug(dto.name);
      const manager = getManager();
      let query = '(';
      dto.selectedTag.forEach(element => {
        query += "'" + element + "',";
      });
      query = query.slice(0, -1) + ')';

      const tags = await manager.query(
        `SELECT * from tags where name in ${query}`,
      );
      console.log('tag', tags);

      const prices = [];
      Object.keys(dto.format).forEach(key => {
        if (dto.format[key] != null && dto.format[key] != '')
          prices.push({ price: dto.format[key], format: key });
      });
      try {
        let author = await this.authorRepository.findOne({
          where: { name: dto.authorName },
        });
        if (!author) {
          author = this.authorRepository.create({ name: dto.authorName });
          this.authorRepository.save(author);
        }
        const createPrice = this.priceRepository.create(prices);
        await this.priceRepository.save(createPrice);
        const data = this.repository.create({
          ...dto,
          tags,
          prices: createPrice,
          author,
        });
        return await this.repository.save(data);
      } catch (error) {
        throw new HttpException(
          {
            message: 'Internal Server Error',
            status: HttpStatus.BAD_REQUEST,
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      // return this.repository.save(data);
    } catch (error) {
      throw new HttpException(
        {
          messsage: 'Internal Server Error',
          status: HttpStatus.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('inactive')
  async getInactive(@ParsedRequest() req: CrudRequest) {
    try {
      const data = await this.repository.find({
        withDeleted: true,
        where: {
          deletedAt: Not(IsNull()),
        },
      });
      console.log(data);

      //return data;
    } catch (error) {
      throw new InternalServerErrorException('Error: Internal Server');
    }
  }
  @Override('deleteOneBase')
  @UseGuards(AuthGuard)
  async softDelete(@ParsedRequest() req: CrudRequest): Promise<void> {
    const id = req.parsed.paramsFilter.find(
      f => f.field === 'id' && f.operator === '$eq',
    ).value;
    const data = await this.repository.findOne({ where: { id } });
    if (!data) {
      throw new HttpException(
        {
          message: 'Not Found',
          err: HttpStatus.NOT_FOUND,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    try {
      await this.repository.softDelete(id);
    } catch (error) {
      throw new InternalServerErrorException('Error: Internal Server');
    }
  }

  @Override('getOneBase')
  async getOne(@ParsedRequest() req: CrudRequest) {
    return await this.base.getOneBase(req);
  }
  @Override('getManyBase')
  // @UseGuards(AuthGuard, ACGuard)
  // @UseRoles({
  //   resource: 'book',
  //   action: 'read',
  //   possession: 'any',
  // })
  async getMany(@ParsedRequest() req: CrudRequest) {
    return this.base.getManyBase(req);
  }

  @Override('replaceOneBase')
  @UseGuards(AuthGuard, ACGuard)
  @UseRoles({
    resource: 'book',
    action: 'update',
    possession: 'any',
  })
  async updateOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: Book) {
    if (!dto.format['f1'] && !dto.format['f2'] && !dto.format['f3']) {
      throw new HttpException(
        {
          message: 'Price is Empty',
          status: HttpStatus.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    try {
      dto.slug = this.getSlug(dto.name);
      const manager = getManager();
      let query = '(';
      dto.selectedTag.forEach(element => {
        query += "'" + element + "',";
      });
      query = query.slice(0, -1) + ')';

      const tags = await manager.query(
        `SELECT * from tags where name in ${query}`,
      );
      console.log('tag', tags);

      const prices = [];
      Object.keys(dto.format).forEach(key => {
        if (dto.format[key] != null && dto.format[key] != '')
          prices.push({ price: dto.format[key], format: key });
      });
      try {
        let author = await this.authorRepository.findOne({
          where: { name: dto.authorName },
        });
        if (!author) {
          author = this.authorRepository.create({ name: dto.authorName });
          this.authorRepository.save(author);
        }
        const createPrice = this.priceRepository.create(prices);
        await this.priceRepository.save(createPrice);
        const data = this.repository.create({
          ...dto,
          tags,
          prices: createPrice,
          author,
        });
        return await this.repository.save(data);
      } catch (error) {
        throw new HttpException(
          {
            message: 'Internal Server Error',
            status: HttpStatus.BAD_REQUEST,
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      // return this.repository.save(data);
    } catch (error) {
      throw new HttpException(
        {
          messsage: 'Internal Server Error',
          status: HttpStatus.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put('update/:id')
  @UseGuards(AuthGuard, ACGuard)
  @UseRoles({
    resource: 'book',
    action: 'update',
    possession: 'any',
  })
  async updateStatus(@Body() dto: BookDTO): Promise<Book> {
    console.log('here', dto);
    const data = await this.bookRepository.findOne({ where: { id: dto.id } });
    data.available = dto.available;
    return await this.bookRepository.save(data);
  }

  @Get('category/book')
  async getByCategory() {
    console.log('here');
  }
  @Post('/:id/favorites')
  @UseGuards(AuthGuard)
  async favoritesBook(@Param('id') id: number, @User() user) {
    let checkFavorite = false;
    const favorites = await this.bookRepository.findOne({
      where: { id },
      relations: ['favoritesBy'],
    });
    favorites.favoritesBy.map(async f => {
      if (user.users.id === f.id) {
        console.log('coo');
        checkFavorite = true;
      }
    });
    if (checkFavorite) {
      const manager = getManager();
      await manager.query(
        `DELETE FROM books_favorites_by_users
      WHERE "booksId" = ${id} and "usersId" = '${user.users.id}' `,
      );
      return { favorite: false };
    }
    const favoritedUser = await this.userRepository.findOne({
      where: { id: user.users.id },
    });
    favorites.favoritesBy = [favoritedUser];
    const result = this.bookRepository.create(favorites);
    await this.bookRepository.save(result);

    return { favorite: true };
  }
}

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
  UseGuards,
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
@Crud({
  model: {
    type: Book,
  },
  params: {
    id: {
      type: 'uuid',
      field: 'id',
      primary: true,
    },
    slug: {
      field: 'slug',
      type: 'string',
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
    },
  },
  routes: {},
})
@Controller('/api/v1/books')
export class BooksController extends BaseController<Book> {
  constructor(
    public service: BooksService,
    private readonly repository: BookRepository,
    private readonly priceRepository: PriceRepository,
    private readonly authorRepository: AuthorRepository,
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
  async CreateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: DeepPartial<Book>,
  ) {
    console.log(dto.format);

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
      console.log('here', dto);
      dto.slug = this.getSlug(dto.name);
      const manager = getManager();
      let query = '(';
      dto.selectedTag.forEach(element => {
        query += "'" + element + "',";
      });
      query = query.slice(0, -1) + ')';
      console.log('query', query);

      const tags = await manager.query(
        `SELECT * from tags where name in ${query}`,
      );
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
        console.log('price', prices);
        const createPrice = this.priceRepository.create(prices);
        await this.priceRepository.save(createPrice);
        const data = this.repository.create({
          ...dto,
          tags: tags,
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
      console.log(error);
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

  @Override('getManyBase')
  async getMany(@ParsedRequest() req: CrudRequest) {
    // try {
    //   return await this.repository.find({
    //     where: { available: true },
    //     order: { createdAt: 'ASC' },
    //     take: 1,
    //   });
    // } catch (error) {}
    return this.base.getManyBase(req);
  }
}

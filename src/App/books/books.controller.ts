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
import { Not, IsNull } from 'typeorm';
import { AuthGuard } from '../auth/auth.guard';
import moment = require('moment');
import slugify from 'slugify';

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
  },
  routes: {},
})
@Controller('/api/v1/books')
export class BooksController extends BaseController<Book> {
  constructor(
    public service: BooksService,
    private readonly repository: BookRepository,
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
  async CreateOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: Book) {
    try {
      console.log('here', dto);
      dto.slug = this.getSlug(dto.name);
      const data = this.repository.create({ ...dto, tags: dto.tags });
      return this.repository.save(data);
      // return this.base.createOneBase(req, dto);
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

  // @Override('getManyBase')
  // @UseGuards(AuthGuard)
  // async getMany(@ParsedRequest() req: CrudRequest) {
  //   return this.base.getManyBase(req);
  // }
}

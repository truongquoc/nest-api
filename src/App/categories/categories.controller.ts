import {
  Controller,
  HttpException,
  HttpStatus,
  Get,
  Param,
} from '@nestjs/common';

import {
  Crud,
  Override,
  ParsedRequest,
  CrudRequest,
  ParsedBody,
} from '@nestjsx/crud';
import { Category } from '../../entity/category.entity';
import { BaseController } from 'src/common/Base/base.controller';
import { CategoriesService } from './categories.service';
import { CategoryRepository } from './categories.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TreeBase } from 'src/entity/tree.entity';
import { TreeRepository } from 'typeorm';
import { identity } from 'rxjs';

@Crud({
  model: {
    type: Category,
  },
  params: {
    id: {
      type: 'number',
      field: 'id',
      primary: true,
    },
  },
  query: {
    filter: [],
    join: {},
  },
})
@Controller('api/v1/categories')
export class CategoriesController extends BaseController<Category> {
  constructor(
    public service: CategoriesService,
    @InjectRepository(Category)
    private readonly repository: TreeRepository<Category>,
  ) {
    super(repository);
  }

  // @Get()
  // async getMany() {

  // }
  @Override('createOneBase')
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Category,
  ) {
    // const manager = getManager();
    // const tree = await manager.getTreeRepository(Category).findTrees();
    // console.log(tree);
    if (dto.parentId) {
      const parentObject = await this.repository.findOne({
        where: { id: dto.parentId },
      });
      if (parentObject) {
        dto.parent = parentObject;
        dto.slug = dto.name; /*test case */
      } else {
        throw new HttpException(
          {
            message: 'parentId must be an existed',
            status: HttpStatus.BAD_REQUEST,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    const data = await this.repository.findOne({ where: { name: dto.name } });
    if (data) {
      console.log(data);
      throw new HttpException(
        {
          message: 'Category already existed',
          status: HttpStatus.NOT_ACCEPTABLE,
        },
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const result = this.repository.create(dto);
    return await this.repository.save(result);
  }

  @Override('getManyBase')
  async getMany(@ParsedRequest() req: CrudRequest): Promise<Category[]> {
    return await this.repository.findTrees();
  }

  @Get(':id')
  async getCategpry(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Category,
    @Param('id') id: number,
  ) {
    // console.log(dto.id);
    // console.log('here', dto.id);
    return await this.repository.findOne({
      where: { id },
      relations: ['children'],
    });
  }
}

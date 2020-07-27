import {
  CrudController,
  CrudService,
  CrudRequest,
  CreateManyDto,
  Override,
  ParsedRequest,
} from '@nestjsx/crud';
import { BaseRepository } from './base.repository';
import {
  Delete,
  Param,
  HttpException,
  HttpStatus,
  Patch,
  Get,
  InternalServerErrorException,
} from '@nestjs/common';
import { IsNull, Not } from 'typeorm';
export class BaseController<T> implements CrudController<T> {
  service: import('@nestjsx/crud').CrudService<T>;
  constructor(private readonly baseRepository: BaseRepository<T>) {}
  get base(): CrudController<T> {
    return this;
  }

  // @Override('updateOneBase')
  // @Patch(':id')
  // async restore(@Param('id') id: number): Promise<void> {
  //   console.log('here');

  //   // const data = this.baseRepository.findOne({ where: { id } });
  //   // if (!data) {
  //   //   throw new HttpException(
  //   //     {
  //   //       message: 'Not Found',
  //   //       status: HttpStatus.NOT_FOUND,
  //   //     },
  //   //     HttpStatus.NOT_FOUND,
  //   //   );
  //   // }
  //   // await this.baseRepository.restore(id);
  // }
}

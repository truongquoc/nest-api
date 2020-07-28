import {
  Controller,
  Response,
  HttpStatus,
  HttpException,
  Param,
  HttpCode,
  InternalServerErrorException,
  Get,
  UseGuards,
} from '@nestjs/common';
import {
  CrudController,
  CrudService,
  CrudRequest,
  CreateManyDto,
  Crud,
  Override,
  ParsedRequest,
  ParsedBody,
} from '@nestjsx/crud';
import { SCondition } from '@nestjsx/crud-request';
import { User } from '../../entity/user.entity';
import { UserService } from './users.service';
import { UserRepository } from './user.repository';
import { BaseController } from 'src/common/Base/base.controller';
import { Not, IsNull } from 'typeorm';
import { ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ACGuard, UseRoles } from 'nest-access-control';
import { AuthGuard } from '../auth/auth.guard';
import { AuthServices } from '../auth/auth.service';

@Crud({
  model: {
    type: User,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
    username: {
      field: 'username',
      type: 'string',
      primary: true,
    },
  },
  query: {
    filter: [],
    exclude: ['password'],
    join: {
      role: {
        eager: true,
        allow: ['role'],
      },
      'role.permissions': {
        alias: 'pr',
      },
      profile: {
        exclude: ['updatedAt'],
        eager: true,
      },
    },
  },
})
@Controller('/api/v1/users')
export class UserController extends BaseController<User> {
  constructor(
    public service: UserService,
    private readonly repository: UserRepository,
  ) {
    super(repository);
  }

  // get base(): CrudController<User> {
  //   return this;
  // }
  @Override('getManyBase')
  async getAll(@ParsedRequest() req: CrudRequest) {
    console.log(req.parsed.sort);
    req.parsed.search.$and = [{ isActive: { $eq: true } }];

    try {
      return await this.base.getManyBase(req);
    } catch (error) {
      console.log(error);
    }
  }

  @Override('deleteOneBase')
  async softDelete(@ParsedRequest() req: CrudRequest): Promise<void> {
    const id = req.parsed.paramsFilter.find(
      f => f.field === 'id' && f.operator === '$eq',
    ).value;
    const data = this.repository.findOne({ where: { id } });
    if (!data) {
      throw new HttpException(
        {
          message: 'Not Found',
          status: HttpStatus.NOT_FOUND,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    try {
      await this.repository.softDelete({ id });
    } catch (error) {
      throw new InternalServerErrorException('Incomplete CrudRequest');
    }
  }

  @Override('updateOneBase')
  async restore(@ParsedRequest() req: CrudRequest): Promise<void> {
    const id = req.parsed.paramsFilter.find(
      f => f.field === 'id' && f.operator === '$eq',
    ).value;
    const data = await this.repository.findOne({ where: { id } });
    if (!data) {
      throw new HttpException(
        {
          message: 'Not Found',
          status: HttpStatus.NOT_FOUND,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    console.log(data);
    //await this.repository.restore({ id });
  }
  @Override('createOneBase')
  @ApiOkResponse({ description: 'User login' })
  @ApiUnauthorizedResponse({ description: 'Invalid credential' })
  // @UseGuards(AuthGuard, ACGuard)
  async createOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: User) {
    try {
      console.log('here');
      const data = await this.base.createOneBase(req, dto);
      return data;
    } catch (error) {
      console.log('err', error);

      if (error.code === '23505') {
        throw new HttpException(
          {
            message: 'User or Email already exists',
            status: HttpStatus.CONFLICT,
          },
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(
          {
            message: 'Internal Server error',
            status: HttpStatus.BAD_REQUEST,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  @Get('inActive/:id')
  async Inactive(@ParsedRequest() req: CrudRequest): Promise<void> {
    try {
      const deletedUser = await this.repository.find({
        withDeleted: true,
        where: { deletedAt: Not(IsNull()) },
      });
      console.log(deletedUser);

      // const data = this.repository.findOne({ where: { id } });
      // console.log(data);
    } catch (error) {
      //console.log(error);
      console.log('error', error);
    }
  }

  /** Get All user Inactive status */
  @Get('inactive')
  async getInactive(@ParsedRequest() req: CrudRequest) {
    console.log('here');
    try {
      const data = this.repository.find({
        withDeleted: true,
        where: {
          deletedAt: Not(IsNull()),
        },
      });
      return data;
    } catch (error) {
      throw new InternalServerErrorException('Error: Internal Server');
    }
  }
  @Override('createManyBase')
  async createMany(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateManyDto<User>,
  ) {
    try {
      return await this.base.createManyBase(req, dto);
    } catch (error) {
      console.log(error);
      if (error.code === '23505') {
        throw new HttpException(
          {
            message: 'User or Email already exists',
            status: HttpStatus.CONFLICT,
          },
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(
          {
            message: 'Internal Server error',
            status: HttpStatus.BAD_REQUEST,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }
  @Override('getOneBase')
  async getOne(@ParsedRequest() req: CrudRequest, @ParsedRequest() dto: User) {
    try {
      const data = await this.base.getOneBase(req);
      return data;
    } catch (error) {
      throw new HttpException(
        {
          message: 'User not found',
          error: HttpStatus.NOT_FOUND,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
  @Override('updateOneBase')
  async updateUser(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: User) {
    try {
      const user = await this.base.updateOneBase(req, dto);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

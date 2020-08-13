import {
  Controller,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  Crud,
  Override,
  ParsedRequest,
  CrudRequest,
  ParsedBody,
} from '@nestjsx/crud';
import { Tag } from 'src/entity/tag.entity';
import { BaseController } from 'src/common/Base/base.controller';
import { TagService } from './tag.service';
import { TagRepository } from './tag.repository';
import { User } from 'src/common/decorators/user.decorator';
import { AuthGuard } from '../auth/auth.guard';
import { ACGuard, UserRoles } from 'nest-access-control';
import { UserRepository } from '../users/user.repository';
import moment = require('moment');
import slugify from 'slugify';
import { ApiTags } from '@nestjs/swagger';
@Crud({
  model: {
    type: Tag,
  },
  params: {
    id: {
      type: 'uuid',
      field: 'id',
      primary: true,
    },
  },
  query: {
    filter: [],
    join: {
      book: {},
      author: {
        eager: true,
        exclude: [
          'password',
          'createdAt',
          'deletedAt',
          'username',
          'email',
          'gender',
          'isActive',
        ],
      },
    },
  },
})
@ApiTags('v1/tags')
@Controller('api/v1/tags')
export class TagController extends BaseController<Tag> {
  constructor(
    public service: TagService,
    private readonly repository: TagRepository,
    private readonly authorRepository: UserRepository,
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
  @UseGuards(AuthGuard, ACGuard)
  // @UseRoles({
  //   resource: 'category',
  //   action: 'delete',
  //   possession: 'any',
  // })
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Tag,
    @User() user: any,
  ) {
    const result = await this.repository.findOne({ where: { name: dto.name } });
    if (result) {
      throw new HttpException(
        {
          message: 'Tag already existed',
          status: HttpStatus.CONFLICT,
        },
        HttpStatus.CONFLICT,
      );
    }
    dto.slug = this.getSlug(dto.name);
    const author = await this.authorRepository.findOne({
      where: { id: user.users.id },
    });
    const data = this.repository.create({ ...dto, author });
    await this.repository.save(data);
  }

  @Override('getManyBase')
  async getMany(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: Tag) {
    return await this.base.getManyBase(req);
  }
}

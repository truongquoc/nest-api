import { User } from './../users/user.decorator';
import { Controller, UseGuards } from '@nestjs/common';
import {
  Crud,
  Override,
  ParsedBody,
  CrudRequest,
  ParsedRequest,
} from '@nestjsx/crud';
import { Comment } from 'src/entity/comment.entity';
import { BaseController } from 'src/common/Base/base.controller';
import { CommentService } from './comment.service';
import { CommentRepository } from './comment.repository';
import { ApiTags } from '@nestjs/swagger';
import { UserRepository } from '../users/user.repository';
import { BookRepository } from '../books/book.repository';
import { AuthGuard } from '../auth/auth.guard';
@Crud({
  model: {
    type: Comment,
  },
  params: {
    id: {
      type: 'number',
      field: 'id',
      primary: true,
    },
  },
  query: {
    limit: 10,
    maxLimit: 50,
    alwaysPaginate: true,
  },
})
@ApiTags('v1/comments')
@Controller('api/v1/comment')
export class CommentController extends BaseController<Comment> {
  constructor(
    public service: CommentService,
    private readonly repository: CommentRepository,
    private readonly userRepository: UserRepository,
    private readonly bookRepository: BookRepository,
  ) {
    super(repository);
  }
  @UseGuards(AuthGuard)
  @Override('createOneBase')
  async createOne(
    @User() user,
    @ParsedBody() body: Comment,
    @ParsedRequest() req,
  ) {
    const author = await this.userRepository.findOne({
      where: { id: user.users.id },
    });
    console.log('author ', author);

    const book = await this.bookRepository.findOne({
      where: { id: body.bookId },
    });
    return 1;
  }
}

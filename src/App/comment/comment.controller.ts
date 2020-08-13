import { User } from './../users/user.decorator';
import { Controller, UseGuards, Get, Param } from '@nestjs/common';
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
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserRepository } from '../users/user.repository';
import { BookRepository } from '../books/book.repository';
import { AuthGuard } from '../auth/auth.guard';
import { getRepository, createQueryBuilder } from 'typeorm';
@Crud({
  model: {
    type: Comment,
  },
  params: {
    id: {
      type: 'number',
      field: 'bookId',
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
    let avg = body.rank;
    let times = 1;
    const author = await this.userRepository.findOne({
      where: { id: user.users.id },
    });
    const book = await this.bookRepository.findOne({
      where: { id: body.bookId },
    });
    const isExist = await this.service.findOneById(body.bookId);
    if (isExist) {
      isExist.map((i: Comment) => {
        avg += i.rank;
        times++;
      });
    }
    const objectData = {
      comment: body.comment,
      book,
      author,
      rank: body.rank,
    };
    const comment = this.repository.create(objectData);
    const result = await this.repository.save(comment);
    if (result) {
      await this.bookRepository.update(
        { id: body.bookId },
        { avgRank: avg / times },
      );
    }
    return result;
  }
  // @UseGuards(AuthGuard)
  @Get('/:bookId')
  @ApiOperation({ summary: 'Retrieve many Comment by BookID' })
  async getManyByBookId(@Param('bookId') bookId: number) {
    const result = await this.repository.find({
      where: { bookId },
      relations: ['author'],
    });
    return result;
  }
}

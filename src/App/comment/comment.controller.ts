import { User } from './../users/user.decorator';
import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { Crud, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
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
    bookId: {
      type: 'number',
      field: 'bookId',
    },
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
  query: {
    join: {
      users: { eager: true },
      book: { eager: false },
    },
    limit: 10,
    maxLimit: 50,
    alwaysPaginate: true,
  },
})
@ApiTags('v1/comments')
@Controller('api/v1/comment/:bookId/comments')
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
    @Param() param: any,
  ) {
    let avg = body.rank;
    let times = 1;
    const author = await this.userRepository.findOne({
      where: { id: user.users.id },
    });
    console.log('body', param.bookId);
    const { bookId } = param;
    const book = await this.bookRepository.findOne({
      where: { id: bookId },
    });
    console.log('book', body);

    const isExist = await this.service.findOneById(bookId);
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
        { id: bookId },
        { avgRank: avg / times },
      );
    }
    return result;
  }
}

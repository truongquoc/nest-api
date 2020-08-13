import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/entity/comment.entity';

@Injectable()
export class CommentService extends TypeOrmCrudService<Comment> {
  constructor(@InjectRepository(Comment) repo) {
    super(repo);
  }
}

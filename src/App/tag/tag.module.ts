import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from 'src/entity/tag.entity';
import { User } from 'src/entity/user.entity';
import { TagController } from './tag.controller';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tag, User]), AuthModule],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}

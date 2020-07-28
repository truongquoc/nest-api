import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entity/user.entity';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { AuthServices } from '../auth/auth.service';
import { Role } from '../../entity/role.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  controllers: [UserController],
  providers: [UserService, AuthServices],
  exports: [UserService],
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Role } from 'src/entity/role.entity';
import { AuthController } from 'src/App/auth/auth.controller';
import { AuthServices } from 'src/App/auth/auth.service';
import { PermissionsEntity } from 'src/entity/permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, PermissionsEntity])],
  controllers: [AuthController],
  providers: [AuthServices],
  exports: [AuthServices],
})
export class AuthModule {}

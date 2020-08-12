import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import * as jwt from 'jsonwebtoken';
import { AuthServices } from './auth.service';
import { AuthRepository } from './auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from '../users/user.repository';
import { roles } from 'src/app.role';
@Injectable()
export class AuthGuard implements CanActivate {
  private rolesArray = [];
  constructor(
    private authService: AuthServices, // @InjectRepository(User) // private readonly repository: UserRepository,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    let fakeUser;
    await this.validateToken(request.headers.authorization).then(
      async token => {
        await this.getRolePermission(token['id']);
        console.log('role', this.rolesArray);

        fakeUser = {
          // roles: [this.rolesArray],
          roles: this.rolesArray,
          users: await this.validateToken(request.headers.authorization),
        };
      },
    );
    request.user = fakeUser;
    return true;
  }

  async getRolePermission(id: string) {
    const rolesArr = [];
    let roles = '';

    await this.authService.getRolesPermission(id).then(data => {
      // console.log(data.role);
      switch (data.role) {
        case 'Admin': {
          data.permissions.forEach(async permission => {
            roles = `ADMIN_${permission.method.method.toUpperCase()}_ANY_${permission.module.module.toUpperCase()}`;
            await this.rolesArray.push(roles);
          });
          break;
        }
        case 'User': {
          data.permissions.forEach(async permission => {
            roles = `USER_${permission.method.method.toUpperCase()}_OWN_${permission.module.module.toUpperCase()}`;
            await this.rolesArray.push(roles);
          });
          break;
        }
        case 'Moderator': {
          data.permissions.forEach(async permission => {
            if (
              permission.method.method.toUpperCase() === 'CREATE' ||
              permission.method.method.toUpperCase() === 'READ'
            ) {
              roles = `MODERATOR_${permission.method.method.toUpperCase()}_ANY_${permission.module.module.toUpperCase()}`;
              await this.rolesArray.push(roles);
            } else {
              roles = `MODERATOR_${permission.method.method.toUpperCase()}_OWN_${permission.module.module.toUpperCase()}`;
              await this.rolesArray.push(roles);
            }
          });
          break;
        }
        default:
          break;
      }
    });
  }
  async validateToken(auth: string) {
    console.log(auth);
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
    }
    const token = auth.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      return decoded;
    } catch (error) {
      const message = 'Token Error' + (error.message || error.name);
      throw new HttpException(message, HttpStatus.FORBIDDEN);
    }
  }
}

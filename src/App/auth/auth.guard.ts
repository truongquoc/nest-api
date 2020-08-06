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
        fakeUser = {
          // roles: [this.rolesArray],
          roles: ['ADMIN_CREATE_ANY_CATEGORY'],
          users: await this.validateToken(request.headers.authorization),
        };
      },
    );
    request.user = fakeUser;
    return true;
  }

  async getRolePermission(id: string) {
    const rolesArr = [];
    //let roles = '';
    // await this.authService.getRolesPermission(id).then(data => {
    //   console.log(data);
    //   switch (data.role.role) {
    //     case 'Admin': {
    //       data.role.permissions.forEach(async permission => {
    //         console.log(permission);

    //         // roles = `ADMIN_${permission.methods[0].method.toUpperCase()}_ANY_${
    //         //   permission.modules[0].module
    //         // }`;
    //         // await this.rolesArray.push(roles);
    //       });
    //       break;
    //     }
    //     case 'User': {
    //       data.role.permissions.forEach(async permission => {
    //         // roles = `USER_${permission.methods[0].method.toUpperCase()}_OWN_${
    //         //   permission.modules[0].module
    //         // }`;
    //         // await this.rolesArray.push(roles);
    //       });
    //       break;
    //     }
    //     default:
    //       break;
    //   }
    // });
  }
  async validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'json') {
      throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
    }
    const token = auth.split(' ')[1];
    console.log('token', token);

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      return decoded;
    } catch (error) {
      const message = 'Token Error' + (error.message || error.name);
      throw new HttpException(message, HttpStatus.FORBIDDEN);
    }
  }
}

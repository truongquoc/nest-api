import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import * as jwt from 'jsonwebtoken';
import { AuthServices } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  private rolesArray = [];
  constructor(private authService: AuthServices) {
    //super(repository);
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    let fakeUser;
    await this.validateToken(request.headers.authorization).then(
      async token => {
        await this.getRolePermission(token['id']);
        fakeUser = {
          roles: this.rolesArray,
          users: this.validateToken(request.headers.authorization),
        };
      },
    );
    request.user = fakeUser;
    //console.log(request.user);

    return true;
  }

  async getRolePermission(id: string) {
    const rolesArr = [];
    //let roles = '';
    await this.authService.getRolesPermission(id).then(data => {
      console.log(data);
      switch (data.role.role) {
        case 'Admin': {
          data.role.permissions.forEach(async permission => {
            console.log(permission);

            // roles = `ADMIN_${permission.methods[0].method.toUpperCase()}_ANY_${
            //   permission.modules[0].module
            // }`;
            // await this.rolesArray.push(roles);
          });
          break;
        }
        case 'User': {
          data.role.permissions.forEach(async permission => {
            // roles = `USER_${permission.methods[0].method.toUpperCase()}_OWN_${
            //   permission.modules[0].module
            // }`;
            // await this.rolesArray.push(roles);
          });
          break;
        }
        default:
          break;
      }
    });
  }
  async validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'json') {
      throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
    }
    const token = auth.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      return decoded;
    } catch (error) {
      const message = 'Token Error' + (error.message || error.name);
      throw new HttpException(message, HttpStatus.FORBIDDEN);
    }
  }
}

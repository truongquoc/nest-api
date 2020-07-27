import { RolesBuilder } from 'nest-access-control';

export enum AppRoles {
  ADMIN_CREATE_ANY_USER = 'ADMIN_CREATE_ANY_USER ',
}

export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant([AppRoles.ADMIN_CREATE_ANY_USER])
  .createAny('user')
  .deleteAny('user')
  .readAny('user');

import { RolesBuilder } from 'nest-access-control';

export enum AppRoles {
  ADMIN_CREATE_ANY_USER = 'ADMIN_CREATE_ANY_USER ',
  ADMIN_READ_ANY_USER = 'ADMIN_READ_ANY_USER',
  ADMIN_UPDATE_ANY_USER = 'ADMIN_UPDATE_ANY_USER ',
  ADMIN_DELETE_ANY_USER = 'ADMIN_DELETE_ANY_USER ',
  ADMIN_CREATE_ANY_CATEGORY = 'ADMIN_CREATE_ANY_CATEGORY ',
  ADMIN_CREATE_ANY_BOOK = 'ADMIN_CREATE_ANY_BOOK ',
  ADMIN_READ_ANY_BOOK = 'ADMIN_READ_ANY_BOOK',
  ADMIN_UPDATE_ANY_BOOK = 'ADMIN_UPDATE_ANY_BOOK',
  ADMIN_DELETE_ANY_BOOK = 'ADMIN_DELETE_ANY_BOOK',

  ADMIN_READ_ANY_CATEGORY = 'ADMIN_READ_ANY_CATEGORY',
  ADMIN_UPDATE_ANY_CATEGORY = 'ADMIN_UPDATE_ANY_CATEGORY',
  ADMIN_DELETE_ANY_CATEGORY = 'ADMIN_DELETE_ANY_CATEGORY',

  ADMIN_CREATE_ANY_TAG = 'ADMIN_CREATE_ANY_TAG',
  ADMIN_READ_ANY_TAG = 'ADMIN_READ_ANY_TAG',
  ADMIN_UPDATE_ANY_TAG = 'ADMIN_UPDATE_ANY_TAG',
  ADMIN_DELETE_ANY_TAG = 'ADMIN_DELETE_ANY_TAG',

  MODERATOR_CREATE_ANY_CATEGORY = 'MODERATOR_CREATE_ANY_CATEGORY',
  MODERATOR_DELETE_OWN_CATEGORY = 'MODERATOR_DELETE_OWN_CATEGORY',
}

export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant(AppRoles.ADMIN_CREATE_ANY_USER)
  .createAny('user')
  .deleteAny('user')
  .grant(AppRoles.ADMIN_READ_ANY_USER)
  .readAny('user')
  .grant(AppRoles.ADMIN_UPDATE_ANY_USER)
  .updateAny('user')
  .grant(AppRoles.ADMIN_DELETE_ANY_USER)
  .deleteAny('user')
  .grant(AppRoles.ADMIN_CREATE_ANY_CATEGORY)
  .createAny('category')
  .grant(AppRoles.ADMIN_READ_ANY_BOOK)
  .readAny('book')
  .grant(AppRoles.ADMIN_CREATE_ANY_BOOK)
  .createAny('book')
  .grant(AppRoles.ADMIN_UPDATE_ANY_BOOK)
  .updateAny('book')
  .grant(AppRoles.ADMIN_DELETE_ANY_BOOK)
  .deleteAny('book')
  .grant(AppRoles.MODERATOR_CREATE_ANY_CATEGORY)
  .createAny('category')
  .grant(AppRoles.MODERATOR_DELETE_OWN_CATEGORY)
  .deleteOwn('category')
  .grant(AppRoles.ADMIN_READ_ANY_CATEGORY)
  .readAny('category')
  .grant(AppRoles.ADMIN_UPDATE_ANY_CATEGORY)
  .updateAny('category')
  .grant(AppRoles.ADMIN_DELETE_ANY_CATEGORY)
  .deleteAny('category')
  .grant(AppRoles.ADMIN_CREATE_ANY_TAG)
  .createAny('tag')
  .grant(AppRoles.ADMIN_UPDATE_ANY_TAG)
  .updateAny('tag')
  .grant(AppRoles.ADMIN_DELETE_ANY_TAG)
  .deleteAny('tag')
  .grant(AppRoles.ADMIN_READ_ANY_TAG)
  .readAny('tag');

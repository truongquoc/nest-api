import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

export default class CreateRolePermission implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('roles_permissions')
      .values([
        { roleId: 1, permissionId: 1 },
        { roleId: 1, permissionId: 2 },
        { roleId: 1, permissionId: 3 },
        { roleId: 1, permissionId: 4 },
        { roleId: 1, permissionId: 5 },
        { roleId: 1, permissionId: 6 },
        { roleId: 1, permissionId: 7 },
        { roleId: 1, permissionId: 8 },
      ])
      .execute();
  }
}

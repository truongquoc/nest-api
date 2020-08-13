import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { PermissionsEntity } from '../../entity/permission.entity';

export default class CreatePermissions implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(PermissionsEntity)
      .values([
        { methodId: 1, moduleId: 1 },
        { methodId: 2, moduleId: 1 },
        { methodId: 3, moduleId: 1 },
        { methodId: 4, moduleId: 1 },
        { methodId: 1, moduleId: 2 },
        { methodId: 2, moduleId: 2 },
        { methodId: 3, moduleId: 2 },
        { methodId: 4, moduleId: 2 },
        { methodId: 1, moduleId: 4 },
        { methodId: 2, moduleId: 4 },
        { methodId: 3, moduleId: 4 },
        { methodId: 4, moduleId: 4 },
        { methodId: 1, moduleId: 5 },
        { methodId: 2, moduleId: 5 },
        { methodId: 3, moduleId: 5 },
        { methodId: 4, moduleId: 5 },
      ])
      .execute();
  }
}

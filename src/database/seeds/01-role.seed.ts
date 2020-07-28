import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Role } from '../../App/roles/role.entity';

export default class CreateRoles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Role)
      .values([{ role: 'Admin' }, { role: 'Moderator' }, { role: 'User' }])
      .execute();
  }
}

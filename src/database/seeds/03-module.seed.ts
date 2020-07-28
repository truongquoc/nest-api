import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { ModulesEntity } from '../../App/permission/module.entity';

export default class CreateModules implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(ModulesEntity)
      .values([{ module: 'USER' }, { module: 'BOOK' }, { module: 'PAYMENT' }])
      .execute();
  }
}

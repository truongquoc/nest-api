import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { MethodsEntity } from '../../entity/method.entity';

export default class CreateMethods implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(MethodsEntity)
      .values([
        { method: 'CREATE' },
        { method: 'READ' },
        { method: 'UPDATE' },
        { method: 'DELETE' },
      ])
      .execute();
  }
}

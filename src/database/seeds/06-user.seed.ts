import { Factory, Seeder } from 'typeorm-seeding';
import { Connection, getConnection } from 'typeorm';
import { User } from '../../entity/user.entity';

export default class CreateRoles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          email: 'ngotruongquoc0102@gmail.com',
          name: {
            first: 'Truong',
            last: 'Quoc',
          },
          password: 'admin',
          gender: true,
          birthday: '1999/02/01',
          phone: '0764483638',
          roleId: 1,
        },
      ])
      .execute();
    await factory(User)({ roles: ['Member'] }).createMany(5);
  }
}

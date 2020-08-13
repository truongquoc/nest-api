import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { User, Name } from '../../entity/user.entity';

define(User, (faker: typeof Faker, context: { roles: string[] }) => {
  const gender = faker.random.number(1);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);
  const email = faker.internet.email(firstName, lastName);
  const active = faker.random.number(1);
  const birthday = faker.date.between('1975/01/01', '2020/01/01');
  const phone = faker.phone.phoneNumber();
  //   const avatar = faker.image.avatar();
  const roleId = faker.random.number({ min: 2, max: 3 });
  const user = new User();
  const name = new Name();
  name.first = firstName;
  name.last = lastName;
  user.name = name;
  user.email = email;
  user.password = 'admin';
  user.isActive = Boolean(active);
  user.gender = Boolean(gender);
  user.birthday = birthday;
  user.phone = phone;
  //   user.avatar = avatar;
  user.roleId = roleId;
  return user;
});

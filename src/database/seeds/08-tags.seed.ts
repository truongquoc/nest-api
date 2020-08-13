import { Seeder, Factory } from 'typeorm-seeding';
import { Connection, getConnection } from 'typeorm';
import { getSlug } from '../../core/utils/helper';

import { Tag } from '../../entity/tag.entity';
const tags = [
  {
    name: 'bookstagram',
  },
  {
    name: 'bookshelf',
  },
  {
    name: 'bookstore',
  },
  {
    name: 'booksforkids',
  },
  {
    name: 'bookworms',
  },
  {
    name: 'bookdragon',
  },
  {
    name: 'paperbacks',
  },
  {
    name: 'fiction',
  },
  {
    name: 'action',
  },
  {
    name: 'horror',
  },
  {
    name: 'fantasy',
  },
  {
    name: 'love',
  },
  {
    name: 'poem',
  },
  {
    name: 'mistery',
  },
  {
    name: 'society',
  },
];
export default class CreateTags implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    /**
     * Seed data to Tag */

    for (let index = 0; index < tags.length; index++) {
      await factory(Tag)({ payload: tags[index] }).create();
    }
  }
}

import { define } from 'typeorm-seeding';
import * as Faker from 'faker';
import { getSlug } from '../../core/utils/helper';
import { Book } from '../../entity/book.entity';
import { Price } from 'src/entity/price.entity';
define(Book, (faker: typeof Faker, context: { payload?: Book; price: any }) => {
  const { payload, price } = context;

  const name = payload.name || faker.lorem.word();
  const slug = getSlug(name);
  console.log('price here', price);
  console.log('author', payload.author);
  const object = {
    f1: '16.55',
    f2: '20.99',
    f3: '12.2',
  };
  const book = new Book();
  book.name = name;
  book.slug = slug;
  book.author = payload.author;
  book.publisher = payload.publisher;
  book.quantity = payload.quantity;
  book.ranks = payload.ranks;
  book.tags = payload.tags;
  book.avgRank = payload.avgRank;
  book.publication = faker.date.between('1975/01/01', '2020/01/01');
  book.categoryId = payload.categoryId;
  book.discount = payload.discount;
  book.description = payload.description;
  book.available = payload.available;
  book.dimension = payload.dimension;
  book.language = payload.language;
  book.edition = payload.edition;
  book.isbn = payload.isbn;
  book.image = payload.image;
  book.prices = price;
  book.viewer = payload.viewer;
  return book;
});

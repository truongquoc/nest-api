import { Factory, Seeder } from 'typeorm-seeding';
import { Connection, getConnection, Any } from 'typeorm';
import { User } from '../../entity/user.entity';
import { Category } from '../../entity/category.entity';
import { Price } from '../../entity/price.entity';
import { getSlug } from '../../core/utils/helper';
import { Book } from '../../entity/book.entity';
import { Author } from '../../entity/author.entity';

export default class implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const userRepository = connection.getRepository(User);
    const categoryRepository = connection.getTreeRepository(Category);
    const priceRepository = connection.getRepository(Price);
    const tagRepository = connection.getRepository(Price);
    const authorRepository = connection.getRepository(Author);
    const user = await userRepository.find();
    const tags = await tagRepository.find();
    /**
     * Book by Children Category
     */
    const price = [
      [
        { format: 'f1', price: 15.44 },
        { format: 'f2', price: 20.54 },
        { format: 'f3', price: 150.24 },
      ],
      [
        { format: 'f1', price: 12.0 },
        { format: 'f2', price: 22.0 },
        { format: 'f3', price: 18.24 },
      ],
      [
        { format: 'f1', price: 26.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 26.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
    ];
    const author = [
      {
        name: 'Stephen King',
      },
      {
        name: 'J.K Rowling',
      },
      {
        name: 'Jane Austen',
      },
      {
        name: 'willam shakespearer',
      },
      {
        name: 'Virginal Woolf',
      },
    ];
    const AvgRank = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
    // const data = await getConnection()
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Price)
    //   .values(price[0])
    //   .execute();
    // console.log(data);
    /**
     * seed data author
     */
    for (let index = 0; index < author.length; index++) {
      const data = authorRepository.create(author[index]);
      await authorRepository.save(data);
    }
    const books = [
      {
        name: 'Diary Of A Wimpy Kid (Book 1)',
        discount: null,
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-17',
        language: 'English',
        edition: '',
        isbn: '9781524717544',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/519201/original/9781524717544.jpg?1588173994',
        categoryId: 6,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        authorName: 'ray Jayaward',
        publisher: 'Make Me a World',
        quantity: 20,
        author: author[Math.floor(Math.random() * 6)],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 12)],
      },
    ];

    for (let index = 0; index < books.length; index++) {
      const data = priceRepository.create(price[index]);
      await priceRepository.save(data);
      await factory(Book)({ payload: books[index], price: data }).create();
    }
  }
}

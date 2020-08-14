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
        { format: 'f2', price: 11.33 },
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

      [
        { format: 'f1', price: 24.84 },
        { format: 'f2', price: 12.23 },
        { format: 'f3', price: 13.33 },
      ],
      [
        { format: 'f1', price: 14.56 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 23.92 },
      ],
      [
        { format: 'f1', price: 23.91 },
        { format: 'f2', price: 25.99 },
        { format: 'f3', price: 16.51 },
      ],
      [
        { format: 'f1', price: 17.92 },
        { format: 'f2', price: 28.61 },
        { format: 'f3', price: 18.39 },
      ],
      [
        { format: 'f1', price: 23.82 },
        { format: 'f2', price: 16.99 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 16.51 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 16.51 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],

      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 14.56 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 23.92 },
      ],
      [
        { format: 'f1', price: 23.91 },
        { format: 'f2', price: 25.99 },
        { format: 'f3', price: 16.51 },
      ],
      [
        { format: 'f1', price: 17.92 },
        { format: 'f2', price: 28.61 },
        { format: 'f3', price: 18.39 },
      ],
      [
        { format: 'f1', price: 23.82 },
        { format: 'f2', price: 16.99 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 16.51 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 16.51 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],

      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 15.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 18.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 15.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],

      [
        { format: 'f1', price: 14.56 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 23.92 },
      ],
      [
        { format: 'f1', price: 23.91 },
        { format: 'f2', price: 25.99 },
        { format: 'f3', price: 16.51 },
      ],
      [
        { format: 'f1', price: 17.92 },
        { format: 'f2', price: 28.61 },
        { format: 'f3', price: 18.39 },
      ],
      [
        { format: 'f1', price: 23.82 },
        { format: 'f2', price: 16.99 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 16.51 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 16.51 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],

      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
        { format: 'f2', price: 15.63 },
        { format: 'f3', price: 7.35 },
      ],
      [
        { format: 'f1', price: 13.67 },
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
        name: 'Todd Burpo',
      },
      {
        name: 'Bernadine Evaristo',
      },
      {
        name: 'Kae Allan',
      },
      {
        name: 'Alex Michaelides',
      },
      {
        name: 'Sally Rooney',
      },
      {
        name: 'Alice OseMan',
      },
      {
        name: 'Dave Pelzer',
      },
      {
        name: 'Lherym Callender',
      },
      {
        name: 'Ibram X. Kendi',
      },
      {
        name: 'Layla Saad',
      },
      {
        name: 'Reni Eddo-Lodge',
      },
      {
        name: 'Cathy Park Hong',
      },
      {
        name: 'Ijeoma Oluo',
      },
      {
        name: 'Ruby Hamad',
      },
      {
        name: 'Vincent Van Gogh',
      },
      {
        name: 'Glory Edim',
      },
      {
        name: 'Dorothy Roberts',
      },
      {
        name: 'Carol Anderson',
      },
      {
        name: 'Kristin Kobes Du Mez',
      },
      {
        name: 'James Baldwin',
      },
      {
        name: 'Glory Edim',
      },
      {
        name: 'James Baldwin',
      },
      {
        name: 'Stephanie E. Jones-Rogers',
      },
      {
        name: 'Saeed Jones',
      },
      {
        name: 'Erica Armstrong Dunbar',
      },
      {
        name: 'Lauren Michele Jackson',
      },
      {
        name: 'Clyde W. Ford',
      },
      {
        name: 'Isabel Wilkerson',
      },
      {
        name: 'Kiese Laymon',
      },
      {
        name: 'Claudia Rankine',
      },
      {
        name: 'Claudia Rankine',
      },
      {
        name: 'Tochi Onyebuchi',
      },
      {
        name: 'Yaa Gyasi',
      },
      {
        name: 'Mikki Kendall',
      },
      {
        name: 'Jeremy O Harris',
      },
      {
        name: 'Patrisse Khan-Cullors',
      },
      {
        name: 'Imani Perry',
      },

      {
        name: 'Malcolm X',
      },
      {
        name: 'Wesley Lowery',
      },
      {
        name: 'Hanif Abdurraqib',
      },
      {
        name: 'Wesley Lowery',
      },
      {
        name: 'Paul Ortiz',
      },
      {
        name: 'Ibram X. Kendi',
      },
      {
        name: 'Feminista Jones',
      },
      {
        name: 'Jonathan M. Metzl',
      },
      {
        name: 'Audre Lorde',
      },
      {
        name: 'Toni Morrison',
      },
      {
        name: 'Bell Hooks',
      },
      {
        name: 'Michelle Alexander',
      },
      {
        name: 'Damaris Hill',
      },
      {
        name: 'Tressie McMillan',
      },
      {
        name: 'Sabrina Strings',
      },
      {
        name: 'Richard Rothstein',
      },
      {
        name: 'Reginald Dwayne Betts',
      },
      {
        name: 'Jennifer Harvey',
      },
      {
        name: 'Maurice Carlos Ruffin',
      },
      {
        name: 'Melanie S Hatter',
      },
    ];
    const AvgRank = [2, 2.5, 3, 3.5, 4, 4.5, 5];
    const discounts = [0.1, 0.2, 0.3, null, , 0.5, 0.6, 0.7];
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

    const authors = await authorRepository.find();

    /**
     * Initial Books seeding data
     */
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
          f1: '10.55',
          f2: '21.99',
          f3: '22.2',
        },
        publisher: 'Make Me a World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
      },
      {
        name: 'A child Called It',
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
          'https://images-production.bookshop.org/spree/images/attachments/3349255/original/9781338129311.jpg?1588600943',
        categoryId: 6,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'Scholastic Press',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
      },
      {
        name: 'The Instiute',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-17',
        language: 'English',
        edition: '9th',
        isbn: '1529355419',
        image:
          'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5293/9781529355413.jpg',
        categoryId: 6,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'HODDER & STOUGHTON',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'How to Be an Antiracist',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-17',
        language: 'English',
        edition: '9th',
        isbn: '1529355419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/137668/original/9780525509288.jpg?1592513675',
        categoryId: 6,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'One World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Stamped: Racism, Antiracism',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/12473338/original/9780316453691.jpg?1592594212',
        categoryId: 6,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'One World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'White Rage: The Unspoken Truth of Our Racial Divide',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/4754496/original/9781632864130.jpg?1589118469',
        categoryId: 6,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'One World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'The Cross of Redemption: Uncollected Writings',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/6428240/original/9780307275967.jpg?1588204043',
        categoryId: 6,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'One World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'The Fire Next Time',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/4161494/original/9780679744726.jpg?1588379093',
        categoryId: 6,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'Vintage',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name:
          'They Were Her Property: White Women as Slave Owners in the American South',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/7952033/original/9780300251838.jpg?1588245638',
        categoryId: 6,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'Vintage',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name:
          'They Were Her Property: White Women as Slave Owners in the American South',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/5016529/original/9781501126413.jpg?1588406399',
        categoryId: 6,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'Vintage',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },

      {
        name: 'Heavy: An American Memoir',
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
          'https://images-production.bookshop.org/spree/images/attachments/67127/original/9781501125669.jpg?1588295359',
        categoryId: 7,
        format: {
          f1: '10.55',
          f2: '21.99',
          f3: '22.2',
        },
        publisher: 'Make Me a World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
      },
      {
        name: 'Citizen: An American Lyric',
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
          'https://images-production.bookshop.org/spree/images/attachments/10687692/original/9781555976903.jpg?1588660047',
        categoryId: 6,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'Scholastic Press',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
      },
      {
        name: 'Homegoing',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-17',
        language: 'English',
        edition: '9th',
        isbn: '1529355419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/7353998/original/9781250214751.jpg?1588206864',
        categoryId: 7,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'HODDER & STOUGHTON',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Slave Play',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-17',
        language: 'English',
        edition: '9th',
        isbn: '1529355419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/3380721/original/9781559369787.jpg?1587957049',
        categoryId: 7,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'One World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Stamped: Racism, Antiracism',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/12473338/original/9780316453691.jpg?1592594212',
        categoryId: 7,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'One World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'White Rage: The Unspoken Truth of Our Racial Divide',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/4754496/original/9781632864130.jpg?1589118469',
        categoryId: 7,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'One World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'The Cross of Redemption: Uncollected Writings',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/6428240/original/9780307275967.jpg?1588204043',
        categoryId: 7,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'One World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'The Fire Next Time',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/4161494/original/9780679744726.jpg?1588379093',
        categoryId: 7,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'Vintage',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name:
          'They Were Her Property: White Women as Slave Owners in the American South',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/7952033/original/9780300251838.jpg?1588245638',
        categoryId: 7,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'Vintage',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name:
          'They Were Her Property: White Women as Slave Owners in the American South',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/5016529/original/9781501126413.jpg?1588406399',
        categoryId: 7,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'Vintage',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },

      {
        name: 'Heavy: An American Memoir',
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
          'https://images-production.bookshop.org/spree/images/attachments/67127/original/9781501125669.jpg?1588295359',
        categoryId: 8,
        format: {
          f1: '10.55',
          f2: '21.99',
          f3: '22.2',
        },
        publisher: 'Make Me a World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
      },
      {
        name: 'Citizen: An American Lyric',
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
          'https://images-production.bookshop.org/spree/images/attachments/10687692/original/9781555976903.jpg?1588660047',
        categoryId: 8,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'Scholastic Press',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
      },
      {
        name: 'Homegoing',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-17',
        language: 'English',
        edition: '9th',
        isbn: '1529355419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/7353998/original/9781250214751.jpg?1588206864',
        categoryId: 8,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'HODDER & STOUGHTON',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Slave Play',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-17',
        language: 'English',
        edition: '9th',
        isbn: '1529355419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/3380721/original/9781559369787.jpg?1587957049',
        categoryId: 8,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'One World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Stamped: Racism, Antiracism',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/12473338/original/9780316453691.jpg?1592594212',
        categoryId: 8,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'One World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'White Rage: The Unspoken Truth of Our Racial Divide',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/4754496/original/9781632864130.jpg?1589118469',
        categoryId: 8,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'One World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'The Cross of Redemption: Uncollected Writings',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/6428240/original/9780307275967.jpg?1588204043',
        categoryId: 8,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'One World',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name: 'The Fire Next Time',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/4161494/original/9780679744726.jpg?1588379093',
        categoryId: 8,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'Vintage',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name:
          'They Were Her Property: White Women as Slave Owners in the American South',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/7952033/original/9780300251838.jpg?1588245638',
        categoryId: 8,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'Vintage',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
      {
        name:
          'They Were Her Property: White Women as Slave Owners in the American South',
        description:
          "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
        available: true,
        dimension: '10.0 X 0.5 X 10.2 inches | 1 pounds',
        publication: '2020-03-10',
        language: 'English',
        edition: '2th',
        isbn: '1522255419',
        image:
          'https://images-production.bookshop.org/spree/images/attachments/5016529/original/9781501126413.jpg?1588406399',
        categoryId: 8,
        format: {
          f1: '16.55',
          f2: '20.99',
          f3: '12.2',
        },
        publisher: 'Vintage',
        quantity: Math.floor(Math.random() * 300),
        author: authors[Math.floor(Math.random() * (author.length - 1))],
        tags: tags[Math.floor(Math.random() * 9)],
        avgRank: AvgRank[Math.floor(Math.random() * 6)],
        viewer: Math.floor(Math.random() * 500),
        discount: discounts[Math.floor(Math.random() * 6)],
      },
    ];
    for (let index = 0; index < books.length; index++) {
      const data = priceRepository.create(price[index]);
      await priceRepository.save(data);
      await factory(Book)({ payload: books[index], price: data }).create();
    }
  }
}

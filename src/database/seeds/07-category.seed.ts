import { User } from './../../entity/user.entity';
import { Category } from './../../entity/category.entity';
import { Seeder, Factory } from 'typeorm-seeding';
import { Connection } from 'typeorm';

export default class CreateCategories implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const userRepository = connection.getRepository(User);
    const categoryRepository = connection.getTreeRepository(Category);

    const user = await userRepository.find();
    const topChild = [
      { name: 'Art & Photography', user: user[Math.floor(Math.random() * 6)] },
      { name: 'Biography', user: user[Math.floor(Math.random() * 6)] },
      { name: "Chidren's books", user: user[Math.floor(Math.random() * 6)] },
      { name: 'Craft & Hobbies', user: user[Math.floor(Math.random() * 6)] },
      { name: 'Crime & Thriller', user: user[Math.floor(Math.random() * 6)] },
      { name: 'Fiction', user: user[Math.floor(Math.random() * 6)] },
      { name: 'Food & Drink', user: user[Math.floor(Math.random() * 6)] },
      {
        name: 'Graphic Novels, Anime & Manga',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'History & Archaeology',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Mind, Body and Spirit',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Science Fiction, Fantasy & Horror',
        user: user[Math.floor(Math.random() * 6)],
      },
    ];
    const moreChild = [
      { name: 'Audio Books', user: user[Math.floor(Math.random() * 6)] },
      { name: 'Biography', user: user[Math.floor(Math.random() * 6)] },
      {
        name: 'Business, Finance & Law Computing',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Dictionaries & Languages',
        user: user[Math.floor(Math.random() * 6)],
      },
      { name: 'Entertainment', user: user[Math.floor(Math.random() * 6)] },
      { name: 'Health', user: user[Math.floor(Math.random() * 6)] },
      { name: 'Home & Garden', user: user[Math.floor(Math.random() * 6)] },
      {
        name: 'Humour',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Medical',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Natural History',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Personal Development',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Poetry & Drama',
        user: user[Math.floor(Math.random() * 6)],
      },
    ];
    const topAuthorChild = [
      { name: 'J. K. Rowling', user: user[Math.floor(Math.random() * 6)] },
      { name: 'Biography', user: user[Math.floor(Math.random() * 6)] },
      {
        name: 'Roald Dahl',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Julia Donaldson',
        user: user[Math.floor(Math.random() * 6)],
      },
      { name: 'Stephen King', user: user[Math.floor(Math.random() * 6)] },
      { name: 'David Williams', user: user[Math.floor(Math.random() * 6)] },
      { name: 'Home & Garden', user: user[Math.floor(Math.random() * 6)] },
      {
        name: 'Dr. Seuss',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Andy Griffiths',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Jame Patterson',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Sara J. Mass',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Enid Blyton',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'John Green',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Brandon Sanderson',
        user: user[Math.floor(Math.random() * 6)],
      },
    ];
    const bestSellingChild = [
      { name: 'Harry Potter', user: user[Math.floor(Math.random() * 6)] },
      { name: 'Game of Thrones', user: user[Math.floor(Math.random() * 6)] },
      {
        name: 'Lego',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Divergent',
        user: user[Math.floor(Math.random() * 6)],
      },
      { name: 'Throne of Glass', user: user[Math.floor(Math.random() * 6)] },
      { name: 'Star Wars', user: user[Math.floor(Math.random() * 6)] },
    ];
    const pupularChild = [
      { name: 'Home Learning', user: user[Math.floor(Math.random() * 6)] },
      { name: 'Best Book Ever', user: user[Math.floor(Math.random() * 6)] },
      {
        name: 'Book by Language',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Our Bookmarks',
        user: user[Math.floor(Math.random() * 6)],
      },
      { name: 'Bargain Shop', user: user[Math.floor(Math.random() * 6)] },
    ];
    const chidrenChild = [
      { name: 'Age 0-2', user: user[Math.floor(Math.random() * 6)] },
      { name: 'Age 3-5', user: user[Math.floor(Math.random() * 6)] },
      {
        name: 'Age 6-8',
        user: user[Math.floor(Math.random() * 6)],
      },
      {
        name: 'Age 9-11',
        user: user[Math.floor(Math.random() * 6)],
      },
      { name: 'Teen & Young Adult', user: user[Math.floor(Math.random() * 6)] },
    ];
    // console.log('userRepository', user[Math.floor(Math.random() * 6)]);
    /**
     * Parent categories
     */
    await factory(Category)({
      payload: {
        name: 'Top Categories',
        user: user[Math.floor(Math.random() * 6)],
      },
    }).create();
    await factory(Category)({
      payload: {
        name: 'More Categories',
        user: user[Math.floor(Math.random() * 6)],
      },
    }).create();
    await factory(Category)({
      payload: {
        name: 'Top Authors',
        user: user[Math.floor(Math.random() * 6)],
      },
    }).create();
    await factory(Category)({
      payload: {
        name: 'Bestselling Series',
        user: user[Math.floor(Math.random() * 6)],
      },
    }).create();
    await factory(Category)({
      payload: {
        name: 'Popular Features',
        user: user[Math.floor(Math.random() * 6)],
      },
    }).create();
    await factory(Category)({
      payload: {
        name: "Children's books by age range",
        user: user[Math.floor(Math.random() * 6)],
      },
    }).create();

    const parentCategory = await categoryRepository.findRoots();
    /**
     * Child category of 'Top Categories' category
     */
    for (let index = 0; index < topChild.length; index++) {
      await factory(Category)({
        payload: topChild[index],
        parent: parentCategory[0],
      }).create();
    }
    /**
     * Child category of 'More Categories' category
     */
    for (let index = 0; index < moreChild.length; index++) {
      await factory(Category)({
        payload: moreChild[index],
        parent: parentCategory[0],
      }).create();
    }
    /**
     * Child category of 'Top Authors Categories' category
     */
    for (let index = 0; index < topAuthorChild.length; index++) {
      await factory(Category)({
        payload: topAuthorChild[index],
        parent: parentCategory[0],
      }).create();
    }
    /**
     * Child category of 'Bestselling Series Categories' category
     */
    for (let index = 0; index < bestSellingChild.length; index++) {
      await factory(Category)({
        payload: bestSellingChild[index],
        parent: parentCategory[0],
      }).create();
    }
    /**
     * Child category of 'Popular Features Categories' category
     */
    for (let index = 0; index < pupularChild.length; index++) {
      await factory(Category)({
        payload: pupularChild[index],
        parent: parentCategory[0],
      }).create();
    }
    /**
     * Child category of 'Children's books by age range' category
     */
    for (let index = 0; index < chidrenChild.length; index++) {
      await factory(Category)({
        payload: chidrenChild[index],
        parent: parentCategory[0],
      }).create();
    }
  }
}

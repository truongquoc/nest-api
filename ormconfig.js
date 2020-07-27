// this is required for seeding
// when you want to execute npm run start:dev change dist to src

module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: '172.17.0.2',
    port: 5432,
    username: 'postgres',
    password: '12345678',
    database: 'postgres',
    logging: true,
    synchronize: true,
    dropSchmea: false,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migration: ['src/database/'],
    seeds: ['src/database/seeds/**/*.seed{.ts,.js}'],
    factories: ['src/database/factories/**/*.factory{.ts,.js}'],
  },
];

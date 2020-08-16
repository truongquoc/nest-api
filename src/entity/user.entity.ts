import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Base } from '../entity/base.entity';
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  MaxLength,
  IsEmail,
  IsBoolean,
  IsPhoneNumber,
  IsIn,
  ValidateNested,
} from 'class-validator';
import * as bcrypt from 'bcrypt';
import { Type } from 'class-transformer';
import { CrudValidationGroups } from '@nestjsx/crud';
import { ApiProperty } from '@nestjs/swagger';
import { Profile } from '../entity/profile.entity';
import { Role } from '../entity/role.entity';
import { Category } from './category.entity';
import { Tag } from './tag.entity';
import { Address } from './address.entity';
import { Order } from './order.entity';
import { Comment } from './comment.entity';
import { Book } from './book.entity';
const { CREATE, UPDATE } = CrudValidationGroups;
export class Name {
  @IsString({ always: true })
  @Column({ nullable: true, type: 'text' })
  first: string;

  @IsString({ always: true })
  @Column({ nullable: true, type: 'text' })
  last: string;
}
@Entity('users')
export class User extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(255, { always: true })
  // eslint-disable-next-line @typescript-eslint/camelcase
  @IsEmail({ require_tld: true })
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true,
    readonly: true,
  })
  email: string;

  @Type(t => Name)
  @Column(type => Name)
  name: Name;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(255, { always: true })
  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsBoolean({ always: true })
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsBoolean({ always: true })
  @Column({ type: 'boolean', nullable: false })
  gender: boolean;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @Column({ type: 'date', nullable: true })
  birthday: Date;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsPhoneNumber('VN US')
  @Column({ type: 'varchar', length: 255, nullable: true })
  phone: string;

  @ApiProperty({ example: '3' })
  @IsIn([2, 3])
  @Column({ type: 'int', default: 3 })
  roleId: number;

  @OneToMany(
    type => Order,
    order => order,
  )
  orders: Order[];
  /** Relation to Profile */
  @IsOptional({ groups: [UPDATE, CREATE] })
  @ValidateNested({ always: true })
  @Type(type => Profile)
  @OneToOne(
    type => Profile,
    profile => profile.user,
    { cascade: true },
  )
  @JoinColumn()
  profile: Profile;

  /** Relation to Role */
  @ManyToOne(
    type => Role,
    role => role.users,
    { eager: true },
  )
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @OneToMany(
    type => Tag,
    Tag => Tag.author,
  )
  tags: Tag[];

  @OneToMany(
    type => Category,
    category => category.user,
  )
  categories: Category[];

  /**
   * Relation User to Address
   */
  @ManyToMany(
    type => Address,
    adress => adress.users,
  )
  @JoinTable({
    joinColumn: {
      name: 'userId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'addressId',
      referencedColumnName: 'id',
    },
  })
  addresses: Address[];

  @OneToMany(
    type => Comment,
    comment => comment.author,
  )
  comments: Comment[];

  @ManyToMany(
    type => Book,
    book => book.favoritesBy,
  )
  favorites: Book[];
  @BeforeInsert()
  async hashPassword() {
    const saltRounds = 12;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  // private get token() {
  //   const { id, username } = this;
  //   return jwt.sign({ id, username }, process.env.SECRET, { expiresIn: '7d' });
  // }
}

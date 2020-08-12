import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Base } from './base.entity';
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsDateString,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Address } from './address.entity';
import { Book } from './book.entity';
import { OrderItem } from './order_item.entity';
import { User } from './user.entity';
const { CREATE, UPDATE } = CrudValidationGroups;
@Entity('orders')
export class Order extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsString()
  @Column({ type: 'text', nullable: true, readonly: true })
  coupon: string;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @Column({ type: 'decimal', readonly: true })
  total: number;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text', nullable: true })
  tax: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'decimal' })
  zip: number;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsBoolean()
  @Column({ type: 'boolean', default: false })
  status: boolean;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text', nullable: true })
  description: string;

  @IsNotEmpty({ groups: [CREATE] })
  @ValidateNested({ always: true })
  @OneToOne(type => Address)
  @JoinColumn()
  billingAdress: Address;

  @OneToOne(type => Address)
  @JoinColumn()
  deliveryAdress: Address;

  @ValidateNested({ always: true })
  @IsNotEmpty({ groups: [CREATE] })
  @OneToMany(
    type => OrderItem,
    order => order.order,
  )
  orderItems: OrderItem[];

  @ManyToOne(
    type => User,
    user => user.orders,
  )
  user: User;
}

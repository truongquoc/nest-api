import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Base } from './base.entity';
import { CrudValidationGroups } from '@nestjsx/crud';
const { CREATE, UPDATE } = CrudValidationGroups;
import { IsOptional, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { User } from './user.entity';
import { Order } from './order.entity';
@Entity('addresses')
export class Address extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  city: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  district: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  address: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(12, { always: true })
  @Column({ type: 'varchar', length: 12 })
  phone: string;

  /** Relation
   * Address to User
   */
  @ManyToMany(
    type => User,
    user => user.addresses,
  )
  users: User[];
}

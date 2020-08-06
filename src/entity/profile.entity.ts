import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Base } from './base.entity';
import { IsOptional, IsString, MaxLength } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { User } from './user.entity';
const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('profiles')
export class Profile extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @MaxLength(32, { always: true })
  @Column({ type: 'varchar', length: 32, nullable: true, default: null })
  profileUrl: string;

  /** Relation to User */

  @OneToOne(
    type => User,
    user => user.profile,
  )
  user: User;
}

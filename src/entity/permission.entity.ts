import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { MethodsEntity } from './method.entity';
import { ModulesEntity } from './module.entity';
import { Role } from './role.entity';
@Entity('permissions')
export class PermissionsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('integer')
  methodId: number;
  @Column('integer')
  moduleId: number;
  @ManyToOne(
    type => MethodsEntity,
    method => method.permissions,
  )
  @JoinColumn({ name: 'methodId' })
  method: MethodsEntity;
  @ManyToOne(
    type => ModulesEntity,
    module => module.permissions,
  )
  @JoinColumn({ name: 'moduleId' })
  module: ModulesEntity;
  @ManyToMany(
    type => Role,
    role => role.permissions,
  )
  roles: Role[];
}

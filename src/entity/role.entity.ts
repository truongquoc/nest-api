import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Base } from './base.entity';
import { User } from './user.entity';
import { PermissionsEntity } from './permission.entity';
@Entity('roles')
export class Role extends Base {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  role: string;
  @OneToMany(
    type => User,
    user => user.role,
  )
  users: User[];
  @ManyToMany(
    type => PermissionsEntity,
    permission => permission.roles,
  )
  @JoinTable({
    name: 'roles_permissions',
    joinColumn: {
      name: 'roleId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'permissionId',
      referencedColumnName: 'id',
    },
  })
  permissions: PermissionsEntity[];
}

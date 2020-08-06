import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { PermissionsEntity } from './permission.entity';
@Entity('modules')
export class ModulesEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('text')
    module: string;
    @ManyToMany(type => PermissionsEntity, permission => permission.module)
    permissions: PermissionsEntity[];
}
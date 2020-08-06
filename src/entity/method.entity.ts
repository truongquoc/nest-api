import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { PermissionsEntity } from './permission.entity';

@Entity('methods')
export class MethodsEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('text')
    method: string
    @OneToMany(type => PermissionsEntity, permission => permission.method)
    permissions: PermissionsEntity[];
}


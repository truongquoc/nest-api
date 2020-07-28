import { Base } from './base.entity';
import { IsInt, IsOptional } from 'class-validator';
import { Column } from 'typeorm';

export class TreeBase extends Base {
  @IsOptional()
  @IsInt()
  @Column({ nullable: true })
  parentId: number;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Base } from './base.entity';
import { IsOptional, IsNotEmpty, IsIn, IsDateString } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { enumToArray } from '../core/utils/helper';
import { PaymentEnum } from '../common/enums/paymentMethod.enum';
const { CREATE, UPDATE } = CrudValidationGroups;
@Entity('payment')
export class Payment extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsIn(enumToArray(PaymentEnum))
  @Column({ type: 'enum', enum: PaymentEnum })
  payment: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'decimal', readonly: true })
  price: number;

  @IsOptional({ groups: [UPDATE] })
  @Column({ type: 'boolean', default: false })
  isPaid: boolean;

  @IsOptional({ groups: [UPDATE] })
  @IsDateString()
  @Column({ type: 'date', nullable: true })
  paymentDate: Date;
}

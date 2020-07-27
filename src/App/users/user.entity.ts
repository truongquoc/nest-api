import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
} from 'typeorm';
import { Base } from 'src/common/Base/base.entity';
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
import { Profile } from '../profile/profile.entity';
import { Role } from '../roles/role.entity';
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

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(255, { always: true })
  @Column({
    type: 'varchar',
    length: 125,
    nullable: false,
    unique: true,
    readonly: true,
  })
  username: string;

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
  @Column({ type: 'varchar', length: 12, nullable: true })
  phone: string;

  @ApiProperty({ example: '3' })
  @IsIn([2, 3])
  @Column({ type: 'int', default: 3 })
  roleId: number;

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

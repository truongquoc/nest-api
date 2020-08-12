import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsBoolean,
  IsDateString,
} from 'class-validator';
import { Match } from 'src/Helper/validation/match.decorator';
import { CrudValidationGroups } from '@nestjsx/crud';
const { CREATE, UPDATE } = CrudValidationGroups;
export class LoginDTO {
  @ApiProperty({
    type: String,
    description: 'username or email',
    required: true,
  })
  @IsNotEmpty({ groups: [CREATE] })
  email: string;
  @IsString()
  @IsNotEmpty({ groups: [CREATE] })
  @ApiProperty({ type: String, description: 'password', required: true })
  password: string;
}
export class RegisterDTO {
  @ApiProperty({
    type: String,
    description: 'Email',
    required: true,
  })
  @IsNotEmpty({ groups: [CREATE] })
  email: string;

  @IsString()
  @IsNotEmpty({ groups: [CREATE] })
  @ApiProperty({ type: String, description: 'password', required: true })
  password: string;

  @IsString()
  @Match('password')
  @ApiProperty({
    type: String,
    description: 'Confirm password',
    required: true,
  })
  confirmPassword: string;

  @IsString()
  @ApiProperty({ type: String, description: 'FirstName' })
  firstName: string;

  @IsString()
  @ApiProperty({ type: String, description: 'LastName', required: true })
  @IsNotEmpty({ groups: [CREATE] })
  lastName: string;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'Gender', required: true })
  @IsNotEmpty({ groups: [CREATE] })
  gender: boolean;

  @ApiProperty({ type: Date, description: 'Birthday' })
  birthday: string;
}

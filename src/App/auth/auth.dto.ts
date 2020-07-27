import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class LoginDTO {
  @ApiProperty({
    type: String,
    description: 'username or email',
    required: true,
  })
  username: string;
  @IsString()
  @ApiProperty({ type: String, description: 'password', required: true })
  password: string;
}
export class RegisterDTO {}

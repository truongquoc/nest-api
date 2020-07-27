import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthServices } from './auth.service';
import { LoginDTO, RegisterDTO } from 'src/App/auth/auth.dto';
@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthServices) {}

  @Get()
  getRoleByUser(id: string) {
    return this.authService.getRolesPermission(id);
  }

  @Post()
  async Login(@Body() data: LoginDTO) {
    return this.authService.login(data);
  }

  @Post()
  async Register(@Body() userDTO: RegisterDTO) {}
}

import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { AuthServices } from './auth.service';
import { LoginDTO, RegisterDTO } from 'src/App/auth/auth.dto';
import { ValidationPipe } from 'src/shared/validation.pipe';
import { AuthGuard } from './auth.guard';
@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthServices) {}

  @Get()
  // @UseGuards(AuthGuard)
  getRoleByUser(id: string) {
    return this.authService.getRolesPermission(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async Login(@Body() data: LoginDTO) {
    return this.authService.login(data);
  }

  @Post()
  async Register(@Body() userDTO: RegisterDTO) {
    return this.authService;
  }
}

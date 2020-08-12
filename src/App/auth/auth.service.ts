import {
  Injectable,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entity/user.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/entity/role.entity';
import { UserRepository } from 'src/App/users/user.repository';
import * as bcrypt from 'bcrypt';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { sign } from 'jsonwebtoken';
import { Payload } from 'src/types/payload';
@Injectable()
export class AuthServices {
  constructor(
    private userRepository: UserRepository,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async getRolesPermission(userId: string) {
    try {
      const role = await this.userRepository.findOne({
        where: { id: userId },
        relations: ['role', 'role.permissions', 'role.permissions.module'],
      });

      const rolePermission = await this.roleRepository.findOne({
        where: { role: role.role.role },
        relations: ['permissions', 'permissions.module', 'permissions.method'],
      });
      return rolePermission;
    } catch (error) {
      throw new InternalServerErrorException('Interal Server Error');
    }
  }

  async login(data: LoginDTO) {
    try {
      const { email, password } = data;
      const user: User = await this.validateUser(email, password);
      const payload: Payload = {
        id: user.id,
        firstName: user.name.first,
        lastName: user.name.last,
        role: user.role.role,
      };
      return {
        token: await this.signPayload(payload),
        id: user.id,
        name: {
          first: user.name.first,
          last: user.name.last,
        },
        email: user.email,
        gender: user.gender,
        birthday: user.birthday,
        phone: user.phone,
        role: user.role.role,
      };
    } catch (error) {
      throw error;
    }
  }
  async signPayload(payload: Payload) {
    return await sign(payload, process.env.SECRET_KEY, { expiresIn: '12h' });
  }

  async register(dto: RegisterDTO) {
    try {
      const data = this.userRepository.create({
        ...dto,
        name: { first: dto.firstName, last: dto.lastName },
      });
      return await this.userRepository.save(data);
    } catch (error) {
      if (error.code == '23505') {
        throw new HttpException(
          {
            message: 'Email Already exists',
            code: HttpStatus.CONFLICT,
          },
          HttpStatus.CONFLICT,
        );
      }
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  async validateUser(email: string, password: string): Promise<User> {
    let userByEmail = null;
    try {
      userByEmail = await this.userRepository.findOne({
        where: { email },
      });
    } catch (error) {
      console.log('err', error);

      throw new HttpException(
        {
          message: 'Internal Server Error',
          status: HttpStatus.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    if (
      !userByEmail ||
      !(await this.comparePassword(password, userByEmail.password))
    ) {
      throw new HttpException(
        {
          message: 'Invalid Credentials',
          status: HttpStatus.UNAUTHORIZED,
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    return userByEmail;
  }
  async comparePassword(attempt: string, password: string): Promise<boolean> {
    return await bcrypt.compare(attempt, password);
  }
}

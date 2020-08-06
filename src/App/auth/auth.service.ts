import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
    const rolePermission = await this.userRepository.findOne({
      where: { id: userId },
      relations: [
        'role',
        'role.permissions',
        'role.permissions.module',
        'role.permissions.method',
      ],
    });
    return rolePermission;
  }

  async login(data: LoginDTO) {
    try {
      const { username, password } = data;
      const user: User = await this.validateUser(username, password);
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
        username: user.username,
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

  async validateUser(usernameOrEmail: string, password: string): Promise<User> {
    let userPassword = '';
    let userByUsername;
    let userByEmail;
    try {
      userByUsername = await this.userRepository.findOne({
        where: { username: usernameOrEmail },
      });
    } catch (error) {
      throw new HttpException(
        {
          message: 'Internal Server Error',
          status: HttpStatus.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    try {
      userByEmail = await this.userRepository.findOne({
        where: { email: usernameOrEmail },
      });
    } catch (error) {
      throw new HttpException(
        {
          message: 'Internal Server Error',
          status: HttpStatus.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    userByUsername
      ? (userPassword = userByUsername.password)
      : userByEmail
      ? (userPassword = userByEmail.password)
      : '';

    if (
      (!userByUsername && !userByEmail) ||
      !this.comparePassword(password, userPassword)
    ) {
      throw new HttpException(
        {
          message: 'Invalid Credentials',
          status: HttpStatus.UNAUTHORIZED,
        },
        HttpStatus.OK,
      );
    }
    if (userByEmail) return userByEmail;
    else return userByUsername;
  }
  async comparePassword(attempt: string, password: string): Promise<boolean> {
    return await bcrypt.compare(attempt, password);
  }
}

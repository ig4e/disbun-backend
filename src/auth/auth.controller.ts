import {
  Body,
  ConflictException,
  Controller,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/login.input';
import { userRegisterDto } from './dto/register.input';
import bcrypt from 'bcrypt';
import { authConstans } from './constants';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private prisma: PrismaService,
  ) {}
  @Post('login')
  async login(@Body() userLoginDto: UserLoginDto) {
    const user = await this.authService.validateUser(
      userLoginDto.email,
      userLoginDto.password,
    );

    if (user) return await this.authService.login(user);

    throw new UnauthorizedException('Email or password is invalid.');
  }

  async register(@Body() userRegisterDto: userRegisterDto) {
    const emailAlreadyExsits = await this.prisma.user.count({
      where: { email: { equals: userRegisterDto.email } },
    });

    if (emailAlreadyExsits > 0)
      throw new ConflictException('Email already exists');

    const user = await this.prisma.user.create({
      data: {
        email: userRegisterDto.email,
        username: userRegisterDto.username,
        dateOfBirth: new Date(userRegisterDto.dateOfBirth),
        discriminator: randomUUID().split('-')[1],
        staff: false,
        verified: false,
        password: await bcrypt.hash(
          userRegisterDto.password,
          authConstans.saltRounds,
        ),
      },
    });

    return await this.authService.login(user);
  }
}

import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne({ email: { equals: email } });
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (user && passwordCompare) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    return {
      access_token: this.jwtService.sign({
        id: user.id,
        email: user.email,
        staff: user.staff,
        verified: user.verified,
      }),
    };
  }
}

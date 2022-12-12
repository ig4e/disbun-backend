import { Injectable } from '@nestjs/common';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
import { UserUpdateInput } from 'src/@generated/user/user-update.input';
import { UserWhereUniqueInput } from 'src/@generated/user/user-where-unique.input';
import { UserWhereInput } from 'src/@generated/user/user-where.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(userCreateInput: UserCreateInput) {
    return this.prisma.user.create({ data: userCreateInput as any });
  }

  findAll(userWhereInput?: UserWhereInput) {
    return this.prisma.user.findMany({
      where: userWhereInput,
      include: { relations: { include: { relatedUser: true, channel: true } } },
    });
  }

  findOne(userWhereInput?: UserWhereInput) {
    return this.prisma.user.findFirst({ where: userWhereInput });
  }

  update(
    userWhereUniqueInput: UserWhereUniqueInput,
    userUpdateInput: UserUpdateInput,
  ) {
    return this.prisma.user.update({
      where: userWhereUniqueInput,
      data: userUpdateInput as any,
    });
  }
}

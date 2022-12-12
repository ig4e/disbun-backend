import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
import { UserUpdateInput } from 'src/@generated/user/user-update.input';
import { UserWhereUniqueInput } from 'src/@generated/user/user-where-unique.input';
import { UserWhereInput } from 'src/@generated/user/user-where.input';
import { User } from 'src/@generated/user/user.model';
import { CurrentUser, GqlAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'me' })
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user: User) {
    return this.userService.findOne({ id: { equals: user.id } });
  }

  @Query(() => User, { name: 'user' })
  findOne(
    @Args('userWhereInput', { nullable: true }) userWhereInput: UserWhereInput,
  ) {
    return this.userService.findOne(userWhereInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll(
    @Args('userWhereInput', { nullable: true }) userWhereInput: UserWhereInput,
  ) {
    return this.userService.findAll(userWhereInput);
  }

  @Mutation(() => User)
  createUser(@Args('userCreateInput') userCreateInput: UserCreateInput) {
    return this.userService.create(userCreateInput);
  }

  @Mutation(() => User)
  updateUser(
    @Args('userWhereUniqueInput') userWhereUniqueInput: UserWhereUniqueInput,
    @Args('userUpdateInput') userUpdateInput: UserUpdateInput,
  ) {
    return this.userService.update(userWhereUniqueInput, userUpdateInput);
  }
}

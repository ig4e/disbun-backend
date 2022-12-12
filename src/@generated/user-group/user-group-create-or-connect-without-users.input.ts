import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserGroupCreateWithoutUsersInput } from './user-group-create-without-users.input';

@InputType()
export class UserGroupCreateOrConnectWithoutUsersInput {

    @Field(() => UserGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserGroupWhereUniqueInput)
    where!: UserGroupWhereUniqueInput;

    @Field(() => UserGroupCreateWithoutUsersInput, {nullable:false})
    @Type(() => UserGroupCreateWithoutUsersInput)
    create!: UserGroupCreateWithoutUsersInput;
}

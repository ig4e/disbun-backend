import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutUsersInput } from './user-group-create-without-users.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutUsersInput } from './user-group-create-or-connect-without-users.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';

@InputType()
export class UserGroupCreateNestedOneWithoutUsersInput {

    @Field(() => UserGroupCreateWithoutUsersInput, {nullable:true})
    @Type(() => UserGroupCreateWithoutUsersInput)
    create?: UserGroupCreateWithoutUsersInput;

    @Field(() => UserGroupCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutUsersInput)
    connectOrCreate?: UserGroupCreateOrConnectWithoutUsersInput;

    @Field(() => UserGroupWhereUniqueInput, {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    connect?: UserGroupWhereUniqueInput;
}

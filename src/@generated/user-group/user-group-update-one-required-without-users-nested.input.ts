import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutUsersInput } from './user-group-create-without-users.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutUsersInput } from './user-group-create-or-connect-without-users.input';
import { UserGroupUpsertWithoutUsersInput } from './user-group-upsert-without-users.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { UserGroupUpdateWithoutUsersInput } from './user-group-update-without-users.input';

@InputType()
export class UserGroupUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => UserGroupCreateWithoutUsersInput, {nullable:true})
    @Type(() => UserGroupCreateWithoutUsersInput)
    create?: UserGroupCreateWithoutUsersInput;

    @Field(() => UserGroupCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutUsersInput)
    connectOrCreate?: UserGroupCreateOrConnectWithoutUsersInput;

    @Field(() => UserGroupUpsertWithoutUsersInput, {nullable:true})
    @Type(() => UserGroupUpsertWithoutUsersInput)
    upsert?: UserGroupUpsertWithoutUsersInput;

    @Field(() => UserGroupWhereUniqueInput, {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    connect?: UserGroupWhereUniqueInput;

    @Field(() => UserGroupUpdateWithoutUsersInput, {nullable:true})
    @Type(() => UserGroupUpdateWithoutUsersInput)
    update?: UserGroupUpdateWithoutUsersInput;
}

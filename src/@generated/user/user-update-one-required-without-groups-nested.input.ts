import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGroupsInput } from './user-create-without-groups.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGroupsInput } from './user-create-or-connect-without-groups.input';
import { UserUpsertWithoutGroupsInput } from './user-upsert-without-groups.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutGroupsInput } from './user-update-without-groups.input';

@InputType()
export class UserUpdateOneRequiredWithoutGroupsNestedInput {

    @Field(() => UserCreateWithoutGroupsInput, {nullable:true})
    @Type(() => UserCreateWithoutGroupsInput)
    create?: UserCreateWithoutGroupsInput;

    @Field(() => UserCreateOrConnectWithoutGroupsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGroupsInput)
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput;

    @Field(() => UserUpsertWithoutGroupsInput, {nullable:true})
    @Type(() => UserUpsertWithoutGroupsInput)
    upsert?: UserUpsertWithoutGroupsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutGroupsInput, {nullable:true})
    @Type(() => UserUpdateWithoutGroupsInput)
    update?: UserUpdateWithoutGroupsInput;
}

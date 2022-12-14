import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserSideRelationsInput } from './user-create-without-user-side-relations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserSideRelationsInput } from './user-create-or-connect-without-user-side-relations.input';
import { UserUpsertWithoutUserSideRelationsInput } from './user-upsert-without-user-side-relations.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUserSideRelationsInput } from './user-update-without-user-side-relations.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserSideRelationsNestedInput {

    @Field(() => UserCreateWithoutUserSideRelationsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserSideRelationsInput)
    create?: UserCreateWithoutUserSideRelationsInput;

    @Field(() => UserCreateOrConnectWithoutUserSideRelationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserSideRelationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserSideRelationsInput;

    @Field(() => UserUpsertWithoutUserSideRelationsInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserSideRelationsInput)
    upsert?: UserUpsertWithoutUserSideRelationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUserSideRelationsInput, {nullable:true})
    @Type(() => UserUpdateWithoutUserSideRelationsInput)
    update?: UserUpdateWithoutUserSideRelationsInput;
}

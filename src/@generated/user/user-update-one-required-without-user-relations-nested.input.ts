import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserRelationsInput } from './user-create-without-user-relations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserRelationsInput } from './user-create-or-connect-without-user-relations.input';
import { UserUpsertWithoutUserRelationsInput } from './user-upsert-without-user-relations.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUserRelationsInput } from './user-update-without-user-relations.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserRelationsNestedInput {

    @Field(() => UserCreateWithoutUserRelationsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserRelationsInput)
    create?: UserCreateWithoutUserRelationsInput;

    @Field(() => UserCreateOrConnectWithoutUserRelationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserRelationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserRelationsInput;

    @Field(() => UserUpsertWithoutUserRelationsInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserRelationsInput)
    upsert?: UserUpsertWithoutUserRelationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUserRelationsInput, {nullable:true})
    @Type(() => UserUpdateWithoutUserRelationsInput)
    update?: UserUpdateWithoutUserRelationsInput;
}

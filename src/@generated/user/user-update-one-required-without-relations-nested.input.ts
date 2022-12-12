import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRelationsInput } from './user-create-without-relations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRelationsInput } from './user-create-or-connect-without-relations.input';
import { UserUpsertWithoutRelationsInput } from './user-upsert-without-relations.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRelationsInput } from './user-update-without-relations.input';

@InputType()
export class UserUpdateOneRequiredWithoutRelationsNestedInput {

    @Field(() => UserCreateWithoutRelationsInput, {nullable:true})
    @Type(() => UserCreateWithoutRelationsInput)
    create?: UserCreateWithoutRelationsInput;

    @Field(() => UserCreateOrConnectWithoutRelationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRelationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutRelationsInput;

    @Field(() => UserUpsertWithoutRelationsInput, {nullable:true})
    @Type(() => UserUpsertWithoutRelationsInput)
    upsert?: UserUpsertWithoutRelationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutRelationsInput, {nullable:true})
    @Type(() => UserUpdateWithoutRelationsInput)
    update?: UserUpdateWithoutRelationsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserSideRelationsInput } from './user-create-without-user-side-relations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserSideRelationsInput } from './user-create-or-connect-without-user-side-relations.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserSideRelationsInput {

    @Field(() => UserCreateWithoutUserSideRelationsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserSideRelationsInput)
    create?: UserCreateWithoutUserSideRelationsInput;

    @Field(() => UserCreateOrConnectWithoutUserSideRelationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserSideRelationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserSideRelationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}

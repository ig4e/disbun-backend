import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserRelationsInput } from './user-create-without-user-relations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserRelationsInput } from './user-create-or-connect-without-user-relations.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserRelationsInput {

    @Field(() => UserCreateWithoutUserRelationsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserRelationsInput)
    create?: UserCreateWithoutUserRelationsInput;

    @Field(() => UserCreateOrConnectWithoutUserRelationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserRelationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserRelationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRelationsInput } from './user-create-without-relations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRelationsInput } from './user-create-or-connect-without-relations.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRelationsInput {

    @Field(() => UserCreateWithoutRelationsInput, {nullable:true})
    @Type(() => UserCreateWithoutRelationsInput)
    create?: UserCreateWithoutRelationsInput;

    @Field(() => UserCreateOrConnectWithoutRelationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRelationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutRelationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}

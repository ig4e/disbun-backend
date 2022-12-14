import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserSideRelationsInput } from './user-create-without-user-side-relations.input';

@InputType()
export class UserCreateOrConnectWithoutUserSideRelationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUserSideRelationsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserSideRelationsInput)
    create!: UserCreateWithoutUserSideRelationsInput;
}

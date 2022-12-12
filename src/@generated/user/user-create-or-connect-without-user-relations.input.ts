import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserRelationsInput } from './user-create-without-user-relations.input';

@InputType()
export class UserCreateOrConnectWithoutUserRelationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUserRelationsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserRelationsInput)
    create!: UserCreateWithoutUserRelationsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRelationsInput } from './user-create-without-relations.input';

@InputType()
export class UserCreateOrConnectWithoutRelationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutRelationsInput, {nullable:false})
    @Type(() => UserCreateWithoutRelationsInput)
    create!: UserCreateWithoutRelationsInput;
}

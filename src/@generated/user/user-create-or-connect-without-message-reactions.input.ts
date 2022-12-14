import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMessageReactionsInput } from './user-create-without-message-reactions.input';

@InputType()
export class UserCreateOrConnectWithoutMessageReactionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMessageReactionsInput, {nullable:false})
    @Type(() => UserCreateWithoutMessageReactionsInput)
    create!: UserCreateWithoutMessageReactionsInput;
}

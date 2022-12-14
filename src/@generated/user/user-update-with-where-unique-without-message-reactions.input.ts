import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMessageReactionsInput } from './user-update-without-message-reactions.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutMessageReactionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMessageReactionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutMessageReactionsInput)
    data!: UserUpdateWithoutMessageReactionsInput;
}

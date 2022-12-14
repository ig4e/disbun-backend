import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMessageReactionsInput } from './user-update-without-message-reactions.input';
import { UserCreateWithoutMessageReactionsInput } from './user-create-without-message-reactions.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutMessageReactionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMessageReactionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutMessageReactionsInput)
    update!: UserUpdateWithoutMessageReactionsInput;

    @Field(() => UserCreateWithoutMessageReactionsInput, {nullable:false})
    @Type(() => UserCreateWithoutMessageReactionsInput)
    create!: UserCreateWithoutMessageReactionsInput;
}

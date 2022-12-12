import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMessageReactionInput } from './user-update-without-message-reaction.input';
import { UserCreateWithoutMessageReactionInput } from './user-create-without-message-reaction.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutMessageReactionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMessageReactionInput, {nullable:false})
    @Type(() => UserUpdateWithoutMessageReactionInput)
    update!: UserUpdateWithoutMessageReactionInput;

    @Field(() => UserCreateWithoutMessageReactionInput, {nullable:false})
    @Type(() => UserCreateWithoutMessageReactionInput)
    create!: UserCreateWithoutMessageReactionInput;
}

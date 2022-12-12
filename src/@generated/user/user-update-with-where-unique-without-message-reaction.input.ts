import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMessageReactionInput } from './user-update-without-message-reaction.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutMessageReactionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMessageReactionInput, {nullable:false})
    @Type(() => UserUpdateWithoutMessageReactionInput)
    data!: UserUpdateWithoutMessageReactionInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageReactionWhereUniqueInput } from './message-reaction-where-unique.input';
import { Type } from 'class-transformer';
import { MessageReactionUpdateWithoutUsersInput } from './message-reaction-update-without-users.input';

@InputType()
export class MessageReactionUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => MessageReactionWhereUniqueInput, {nullable:false})
    @Type(() => MessageReactionWhereUniqueInput)
    where!: MessageReactionWhereUniqueInput;

    @Field(() => MessageReactionUpdateWithoutUsersInput, {nullable:false})
    @Type(() => MessageReactionUpdateWithoutUsersInput)
    data!: MessageReactionUpdateWithoutUsersInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageReactionWhereUniqueInput } from './message-reaction-where-unique.input';
import { Type } from 'class-transformer';
import { MessageReactionUpdateWithoutMessageInput } from './message-reaction-update-without-message.input';

@InputType()
export class MessageReactionUpdateWithWhereUniqueWithoutMessageInput {

    @Field(() => MessageReactionWhereUniqueInput, {nullable:false})
    @Type(() => MessageReactionWhereUniqueInput)
    where!: MessageReactionWhereUniqueInput;

    @Field(() => MessageReactionUpdateWithoutMessageInput, {nullable:false})
    @Type(() => MessageReactionUpdateWithoutMessageInput)
    data!: MessageReactionUpdateWithoutMessageInput;
}

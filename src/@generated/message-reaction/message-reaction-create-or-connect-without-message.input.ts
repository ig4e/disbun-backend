import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageReactionWhereUniqueInput } from './message-reaction-where-unique.input';
import { Type } from 'class-transformer';
import { MessageReactionCreateWithoutMessageInput } from './message-reaction-create-without-message.input';

@InputType()
export class MessageReactionCreateOrConnectWithoutMessageInput {

    @Field(() => MessageReactionWhereUniqueInput, {nullable:false})
    @Type(() => MessageReactionWhereUniqueInput)
    where!: MessageReactionWhereUniqueInput;

    @Field(() => MessageReactionCreateWithoutMessageInput, {nullable:false})
    @Type(() => MessageReactionCreateWithoutMessageInput)
    create!: MessageReactionCreateWithoutMessageInput;
}

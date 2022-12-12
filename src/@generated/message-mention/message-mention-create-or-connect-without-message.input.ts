import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionWhereUniqueInput } from './message-mention-where-unique.input';
import { Type } from 'class-transformer';
import { MessageMentionCreateWithoutMessageInput } from './message-mention-create-without-message.input';

@InputType()
export class MessageMentionCreateOrConnectWithoutMessageInput {

    @Field(() => MessageMentionWhereUniqueInput, {nullable:false})
    @Type(() => MessageMentionWhereUniqueInput)
    where!: MessageMentionWhereUniqueInput;

    @Field(() => MessageMentionCreateWithoutMessageInput, {nullable:false})
    @Type(() => MessageMentionCreateWithoutMessageInput)
    create!: MessageMentionCreateWithoutMessageInput;
}

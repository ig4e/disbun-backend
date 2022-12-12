import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionWhereUniqueInput } from './message-mention-where-unique.input';
import { Type } from 'class-transformer';
import { MessageMentionUpdateWithoutMessageInput } from './message-mention-update-without-message.input';

@InputType()
export class MessageMentionUpdateWithWhereUniqueWithoutMessageInput {

    @Field(() => MessageMentionWhereUniqueInput, {nullable:false})
    @Type(() => MessageMentionWhereUniqueInput)
    where!: MessageMentionWhereUniqueInput;

    @Field(() => MessageMentionUpdateWithoutMessageInput, {nullable:false})
    @Type(() => MessageMentionUpdateWithoutMessageInput)
    data!: MessageMentionUpdateWithoutMessageInput;
}

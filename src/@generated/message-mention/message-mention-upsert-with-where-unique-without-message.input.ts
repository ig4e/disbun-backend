import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionWhereUniqueInput } from './message-mention-where-unique.input';
import { Type } from 'class-transformer';
import { MessageMentionUpdateWithoutMessageInput } from './message-mention-update-without-message.input';
import { MessageMentionCreateWithoutMessageInput } from './message-mention-create-without-message.input';

@InputType()
export class MessageMentionUpsertWithWhereUniqueWithoutMessageInput {

    @Field(() => MessageMentionWhereUniqueInput, {nullable:false})
    @Type(() => MessageMentionWhereUniqueInput)
    where!: MessageMentionWhereUniqueInput;

    @Field(() => MessageMentionUpdateWithoutMessageInput, {nullable:false})
    @Type(() => MessageMentionUpdateWithoutMessageInput)
    update!: MessageMentionUpdateWithoutMessageInput;

    @Field(() => MessageMentionCreateWithoutMessageInput, {nullable:false})
    @Type(() => MessageMentionCreateWithoutMessageInput)
    create!: MessageMentionCreateWithoutMessageInput;
}

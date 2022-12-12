import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageMentionWhereUniqueInput } from '../message-mention/message-mention-where-unique.input';
import { Type } from 'class-transformer';
import { MessageMentionCreateInput } from '../message-mention/message-mention-create.input';
import { MessageMentionUpdateInput } from '../message-mention/message-mention-update.input';

@ArgsType()
export class UpsertOneMessageMentionArgs {

    @Field(() => MessageMentionWhereUniqueInput, {nullable:false})
    @Type(() => MessageMentionWhereUniqueInput)
    where!: MessageMentionWhereUniqueInput;

    @Field(() => MessageMentionCreateInput, {nullable:false})
    @Type(() => MessageMentionCreateInput)
    create!: MessageMentionCreateInput;

    @Field(() => MessageMentionUpdateInput, {nullable:false})
    @Type(() => MessageMentionUpdateInput)
    update!: MessageMentionUpdateInput;
}

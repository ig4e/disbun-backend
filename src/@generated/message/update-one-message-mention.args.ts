import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageMentionUpdateInput } from '../message-mention/message-mention-update.input';
import { Type } from 'class-transformer';
import { MessageMentionWhereUniqueInput } from '../message-mention/message-mention-where-unique.input';

@ArgsType()
export class UpdateOneMessageMentionArgs {

    @Field(() => MessageMentionUpdateInput, {nullable:false})
    @Type(() => MessageMentionUpdateInput)
    data!: MessageMentionUpdateInput;

    @Field(() => MessageMentionWhereUniqueInput, {nullable:false})
    @Type(() => MessageMentionWhereUniqueInput)
    where!: MessageMentionWhereUniqueInput;
}

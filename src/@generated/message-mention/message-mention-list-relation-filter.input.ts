import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionWhereInput } from './message-mention-where.input';

@InputType()
export class MessageMentionListRelationFilter {

    @Field(() => MessageMentionWhereInput, {nullable:true})
    every?: MessageMentionWhereInput;

    @Field(() => MessageMentionWhereInput, {nullable:true})
    some?: MessageMentionWhereInput;

    @Field(() => MessageMentionWhereInput, {nullable:true})
    none?: MessageMentionWhereInput;
}

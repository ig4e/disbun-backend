import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MessageMentionScalarWhereWithAggregatesInput {

    @Field(() => [MessageMentionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MessageMentionScalarWhereWithAggregatesInput>;

    @Field(() => [MessageMentionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MessageMentionScalarWhereWithAggregatesInput>;

    @Field(() => [MessageMentionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MessageMentionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    messageId?: StringWithAggregatesFilter;
}

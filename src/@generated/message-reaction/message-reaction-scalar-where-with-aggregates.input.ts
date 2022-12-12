import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MessageReactionScalarWhereWithAggregatesInput {

    @Field(() => [MessageReactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MessageReactionScalarWhereWithAggregatesInput>;

    @Field(() => [MessageReactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MessageReactionScalarWhereWithAggregatesInput>;

    @Field(() => [MessageReactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MessageReactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    emoji?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    messageId?: StringWithAggregatesFilter;
}

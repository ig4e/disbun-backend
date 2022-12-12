import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageMentionWhereInput } from './message-mention-where.input';
import { Type } from 'class-transformer';
import { MessageMentionOrderByWithAggregationInput } from './message-mention-order-by-with-aggregation.input';
import { MessageMentionScalarFieldEnum } from './message-mention-scalar-field.enum';
import { MessageMentionScalarWhereWithAggregatesInput } from './message-mention-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MessageMentionCountAggregateInput } from './message-mention-count-aggregate.input';
import { MessageMentionMinAggregateInput } from './message-mention-min-aggregate.input';
import { MessageMentionMaxAggregateInput } from './message-mention-max-aggregate.input';

@ArgsType()
export class MessageMentionGroupByArgs {

    @Field(() => MessageMentionWhereInput, {nullable:true})
    @Type(() => MessageMentionWhereInput)
    where?: MessageMentionWhereInput;

    @Field(() => [MessageMentionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MessageMentionOrderByWithAggregationInput>;

    @Field(() => [MessageMentionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MessageMentionScalarFieldEnum>;

    @Field(() => MessageMentionScalarWhereWithAggregatesInput, {nullable:true})
    having?: MessageMentionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MessageMentionCountAggregateInput, {nullable:true})
    _count?: MessageMentionCountAggregateInput;

    @Field(() => MessageMentionMinAggregateInput, {nullable:true})
    _min?: MessageMentionMinAggregateInput;

    @Field(() => MessageMentionMaxAggregateInput, {nullable:true})
    _max?: MessageMentionMaxAggregateInput;
}

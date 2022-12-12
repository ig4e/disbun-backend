import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageReactionWhereInput } from './message-reaction-where.input';
import { Type } from 'class-transformer';
import { MessageReactionOrderByWithAggregationInput } from './message-reaction-order-by-with-aggregation.input';
import { MessageReactionScalarFieldEnum } from './message-reaction-scalar-field.enum';
import { MessageReactionScalarWhereWithAggregatesInput } from './message-reaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MessageReactionCountAggregateInput } from './message-reaction-count-aggregate.input';
import { MessageReactionMinAggregateInput } from './message-reaction-min-aggregate.input';
import { MessageReactionMaxAggregateInput } from './message-reaction-max-aggregate.input';

@ArgsType()
export class MessageReactionGroupByArgs {

    @Field(() => MessageReactionWhereInput, {nullable:true})
    @Type(() => MessageReactionWhereInput)
    where?: MessageReactionWhereInput;

    @Field(() => [MessageReactionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MessageReactionOrderByWithAggregationInput>;

    @Field(() => [MessageReactionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MessageReactionScalarFieldEnum>;

    @Field(() => MessageReactionScalarWhereWithAggregatesInput, {nullable:true})
    having?: MessageReactionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MessageReactionCountAggregateInput, {nullable:true})
    _count?: MessageReactionCountAggregateInput;

    @Field(() => MessageReactionMinAggregateInput, {nullable:true})
    _min?: MessageReactionMinAggregateInput;

    @Field(() => MessageReactionMaxAggregateInput, {nullable:true})
    _max?: MessageReactionMaxAggregateInput;
}

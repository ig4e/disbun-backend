import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageMentionCountOrderByAggregateInput } from './message-mention-count-order-by-aggregate.input';
import { MessageMentionMaxOrderByAggregateInput } from './message-mention-max-order-by-aggregate.input';
import { MessageMentionMinOrderByAggregateInput } from './message-mention-min-order-by-aggregate.input';

@InputType()
export class MessageMentionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    messageId?: keyof typeof SortOrder;

    @Field(() => MessageMentionCountOrderByAggregateInput, {nullable:true})
    _count?: MessageMentionCountOrderByAggregateInput;

    @Field(() => MessageMentionMaxOrderByAggregateInput, {nullable:true})
    _max?: MessageMentionMaxOrderByAggregateInput;

    @Field(() => MessageMentionMinOrderByAggregateInput, {nullable:true})
    _min?: MessageMentionMinOrderByAggregateInput;
}

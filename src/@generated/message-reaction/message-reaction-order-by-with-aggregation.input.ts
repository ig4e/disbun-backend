import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageReactionCountOrderByAggregateInput } from './message-reaction-count-order-by-aggregate.input';
import { MessageReactionMaxOrderByAggregateInput } from './message-reaction-max-order-by-aggregate.input';
import { MessageReactionMinOrderByAggregateInput } from './message-reaction-min-order-by-aggregate.input';

@InputType()
export class MessageReactionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emoji?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    messageId?: keyof typeof SortOrder;

    @Field(() => MessageReactionCountOrderByAggregateInput, {nullable:true})
    _count?: MessageReactionCountOrderByAggregateInput;

    @Field(() => MessageReactionMaxOrderByAggregateInput, {nullable:true})
    _max?: MessageReactionMaxOrderByAggregateInput;

    @Field(() => MessageReactionMinOrderByAggregateInput, {nullable:true})
    _min?: MessageReactionMinOrderByAggregateInput;
}

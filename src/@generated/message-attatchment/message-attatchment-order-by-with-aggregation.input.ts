import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageAttatchmentCountOrderByAggregateInput } from './message-attatchment-count-order-by-aggregate.input';
import { MessageAttatchmentAvgOrderByAggregateInput } from './message-attatchment-avg-order-by-aggregate.input';
import { MessageAttatchmentMaxOrderByAggregateInput } from './message-attatchment-max-order-by-aggregate.input';
import { MessageAttatchmentMinOrderByAggregateInput } from './message-attatchment-min-order-by-aggregate.input';
import { MessageAttatchmentSumOrderByAggregateInput } from './message-attatchment-sum-order-by-aggregate.input';

@InputType()
export class MessageAttatchmentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    size?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    messageId?: keyof typeof SortOrder;

    @Field(() => MessageAttatchmentCountOrderByAggregateInput, {nullable:true})
    _count?: MessageAttatchmentCountOrderByAggregateInput;

    @Field(() => MessageAttatchmentAvgOrderByAggregateInput, {nullable:true})
    _avg?: MessageAttatchmentAvgOrderByAggregateInput;

    @Field(() => MessageAttatchmentMaxOrderByAggregateInput, {nullable:true})
    _max?: MessageAttatchmentMaxOrderByAggregateInput;

    @Field(() => MessageAttatchmentMinOrderByAggregateInput, {nullable:true})
    _min?: MessageAttatchmentMinOrderByAggregateInput;

    @Field(() => MessageAttatchmentSumOrderByAggregateInput, {nullable:true})
    _sum?: MessageAttatchmentSumOrderByAggregateInput;
}

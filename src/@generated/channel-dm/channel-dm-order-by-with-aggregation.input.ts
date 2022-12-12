import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChannelDmCountOrderByAggregateInput } from './channel-dm-count-order-by-aggregate.input';
import { ChannelDmMaxOrderByAggregateInput } from './channel-dm-max-order-by-aggregate.input';
import { ChannelDmMinOrderByAggregateInput } from './channel-dm-min-order-by-aggregate.input';

@InputType()
export class ChannelDmOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => ChannelDmCountOrderByAggregateInput, {nullable:true})
    _count?: ChannelDmCountOrderByAggregateInput;

    @Field(() => ChannelDmMaxOrderByAggregateInput, {nullable:true})
    _max?: ChannelDmMaxOrderByAggregateInput;

    @Field(() => ChannelDmMinOrderByAggregateInput, {nullable:true})
    _min?: ChannelDmMinOrderByAggregateInput;
}

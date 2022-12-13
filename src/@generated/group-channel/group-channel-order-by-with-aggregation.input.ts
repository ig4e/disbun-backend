import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GroupChannelCountOrderByAggregateInput } from './group-channel-count-order-by-aggregate.input';
import { GroupChannelMaxOrderByAggregateInput } from './group-channel-max-order-by-aggregate.input';
import { GroupChannelMinOrderByAggregateInput } from './group-channel-min-order-by-aggregate.input';

@InputType()
export class GroupChannelOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userGroupId?: keyof typeof SortOrder;

    @Field(() => GroupChannelCountOrderByAggregateInput, {nullable:true})
    _count?: GroupChannelCountOrderByAggregateInput;

    @Field(() => GroupChannelMaxOrderByAggregateInput, {nullable:true})
    _max?: GroupChannelMaxOrderByAggregateInput;

    @Field(() => GroupChannelMinOrderByAggregateInput, {nullable:true})
    _min?: GroupChannelMinOrderByAggregateInput;
}

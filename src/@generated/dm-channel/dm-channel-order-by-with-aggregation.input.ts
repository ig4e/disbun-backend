import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { DmChannelCountOrderByAggregateInput } from './dm-channel-count-order-by-aggregate.input';
import { DmChannelMaxOrderByAggregateInput } from './dm-channel-max-order-by-aggregate.input';
import { DmChannelMinOrderByAggregateInput } from './dm-channel-min-order-by-aggregate.input';

@InputType()
export class DmChannelOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    userRelationRelatedUserId?: keyof typeof SortOrder;

    @HideField()
    userRelationUserId?: keyof typeof SortOrder;

    @Field(() => DmChannelCountOrderByAggregateInput, {nullable:true})
    _count?: DmChannelCountOrderByAggregateInput;

    @Field(() => DmChannelMaxOrderByAggregateInput, {nullable:true})
    _max?: DmChannelMaxOrderByAggregateInput;

    @Field(() => DmChannelMinOrderByAggregateInput, {nullable:true})
    _min?: DmChannelMinOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GroupImageCountOrderByAggregateInput } from './group-image-count-order-by-aggregate.input';
import { GroupImageMaxOrderByAggregateInput } from './group-image-max-order-by-aggregate.input';
import { GroupImageMinOrderByAggregateInput } from './group-image-min-order-by-aggregate.input';

@InputType()
export class GroupImageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userGroupId?: keyof typeof SortOrder;

    @Field(() => GroupImageCountOrderByAggregateInput, {nullable:true})
    _count?: GroupImageCountOrderByAggregateInput;

    @Field(() => GroupImageMaxOrderByAggregateInput, {nullable:true})
    _max?: GroupImageMaxOrderByAggregateInput;

    @Field(() => GroupImageMinOrderByAggregateInput, {nullable:true})
    _min?: GroupImageMinOrderByAggregateInput;
}

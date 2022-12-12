import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserGroupCountOrderByAggregateInput } from './user-group-count-order-by-aggregate.input';
import { UserGroupMaxOrderByAggregateInput } from './user-group-max-order-by-aggregate.input';
import { UserGroupMinOrderByAggregateInput } from './user-group-min-order-by-aggregate.input';

@InputType()
export class UserGroupOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => UserGroupCountOrderByAggregateInput, {nullable:true})
    _count?: UserGroupCountOrderByAggregateInput;

    @Field(() => UserGroupMaxOrderByAggregateInput, {nullable:true})
    _max?: UserGroupMaxOrderByAggregateInput;

    @Field(() => UserGroupMinOrderByAggregateInput, {nullable:true})
    _min?: UserGroupMinOrderByAggregateInput;
}

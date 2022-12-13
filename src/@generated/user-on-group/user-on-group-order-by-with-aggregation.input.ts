import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOnGroupCountOrderByAggregateInput } from './user-on-group-count-order-by-aggregate.input';
import { UserOnGroupMaxOrderByAggregateInput } from './user-on-group-max-order-by-aggregate.input';
import { UserOnGroupMinOrderByAggregateInput } from './user-on-group-min-order-by-aggregate.input';

@InputType()
export class UserOnGroupOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    owner?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    groupId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => UserOnGroupCountOrderByAggregateInput, {nullable:true})
    _count?: UserOnGroupCountOrderByAggregateInput;

    @Field(() => UserOnGroupMaxOrderByAggregateInput, {nullable:true})
    _max?: UserOnGroupMaxOrderByAggregateInput;

    @Field(() => UserOnGroupMinOrderByAggregateInput, {nullable:true})
    _min?: UserOnGroupMinOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserRelationCountOrderByAggregateInput } from './user-relation-count-order-by-aggregate.input';
import { UserRelationMaxOrderByAggregateInput } from './user-relation-max-order-by-aggregate.input';
import { UserRelationMinOrderByAggregateInput } from './user-relation-min-order-by-aggregate.input';

@InputType()
export class UserRelationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    relatedUserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => UserRelationCountOrderByAggregateInput, {nullable:true})
    _count?: UserRelationCountOrderByAggregateInput;

    @Field(() => UserRelationMaxOrderByAggregateInput, {nullable:true})
    _max?: UserRelationMaxOrderByAggregateInput;

    @Field(() => UserRelationMinOrderByAggregateInput, {nullable:true})
    _min?: UserRelationMinOrderByAggregateInput;
}

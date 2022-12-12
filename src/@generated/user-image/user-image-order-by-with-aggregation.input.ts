import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserImageCountOrderByAggregateInput } from './user-image-count-order-by-aggregate.input';
import { UserImageMaxOrderByAggregateInput } from './user-image-max-order-by-aggregate.input';
import { UserImageMinOrderByAggregateInput } from './user-image-min-order-by-aggregate.input';

@InputType()
export class UserImageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => UserImageCountOrderByAggregateInput, {nullable:true})
    _count?: UserImageCountOrderByAggregateInput;

    @Field(() => UserImageMaxOrderByAggregateInput, {nullable:true})
    _max?: UserImageMaxOrderByAggregateInput;

    @Field(() => UserImageMinOrderByAggregateInput, {nullable:true})
    _min?: UserImageMinOrderByAggregateInput;
}

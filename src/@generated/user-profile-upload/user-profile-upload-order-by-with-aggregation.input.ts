import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserProfileUploadCountOrderByAggregateInput } from './user-profile-upload-count-order-by-aggregate.input';
import { UserProfileUploadMaxOrderByAggregateInput } from './user-profile-upload-max-order-by-aggregate.input';
import { UserProfileUploadMinOrderByAggregateInput } from './user-profile-upload-min-order-by-aggregate.input';

@InputType()
export class UserProfileUploadOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => UserProfileUploadCountOrderByAggregateInput, {nullable:true})
    _count?: UserProfileUploadCountOrderByAggregateInput;

    @Field(() => UserProfileUploadMaxOrderByAggregateInput, {nullable:true})
    _max?: UserProfileUploadMaxOrderByAggregateInput;

    @Field(() => UserProfileUploadMinOrderByAggregateInput, {nullable:true})
    _min?: UserProfileUploadMinOrderByAggregateInput;
}

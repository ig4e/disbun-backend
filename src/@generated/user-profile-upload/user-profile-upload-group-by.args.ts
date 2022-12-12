import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUploadWhereInput } from './user-profile-upload-where.input';
import { Type } from 'class-transformer';
import { UserProfileUploadOrderByWithAggregationInput } from './user-profile-upload-order-by-with-aggregation.input';
import { UserProfileUploadScalarFieldEnum } from './user-profile-upload-scalar-field.enum';
import { UserProfileUploadScalarWhereWithAggregatesInput } from './user-profile-upload-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserProfileUploadCountAggregateInput } from './user-profile-upload-count-aggregate.input';
import { UserProfileUploadMinAggregateInput } from './user-profile-upload-min-aggregate.input';
import { UserProfileUploadMaxAggregateInput } from './user-profile-upload-max-aggregate.input';

@ArgsType()
export class UserProfileUploadGroupByArgs {

    @Field(() => UserProfileUploadWhereInput, {nullable:true})
    @Type(() => UserProfileUploadWhereInput)
    where?: UserProfileUploadWhereInput;

    @Field(() => [UserProfileUploadOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserProfileUploadOrderByWithAggregationInput>;

    @Field(() => [UserProfileUploadScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserProfileUploadScalarFieldEnum>;

    @Field(() => UserProfileUploadScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserProfileUploadScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserProfileUploadCountAggregateInput, {nullable:true})
    _count?: UserProfileUploadCountAggregateInput;

    @Field(() => UserProfileUploadMinAggregateInput, {nullable:true})
    _min?: UserProfileUploadMinAggregateInput;

    @Field(() => UserProfileUploadMaxAggregateInput, {nullable:true})
    _max?: UserProfileUploadMaxAggregateInput;
}

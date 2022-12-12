import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserGroupWhereInput } from './user-group-where.input';
import { Type } from 'class-transformer';
import { UserGroupOrderByWithAggregationInput } from './user-group-order-by-with-aggregation.input';
import { UserGroupScalarFieldEnum } from './user-group-scalar-field.enum';
import { UserGroupScalarWhereWithAggregatesInput } from './user-group-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserGroupCountAggregateInput } from './user-group-count-aggregate.input';
import { UserGroupMinAggregateInput } from './user-group-min-aggregate.input';
import { UserGroupMaxAggregateInput } from './user-group-max-aggregate.input';

@ArgsType()
export class UserGroupGroupByArgs {

    @Field(() => UserGroupWhereInput, {nullable:true})
    @Type(() => UserGroupWhereInput)
    where?: UserGroupWhereInput;

    @Field(() => [UserGroupOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserGroupOrderByWithAggregationInput>;

    @Field(() => [UserGroupScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserGroupScalarFieldEnum>;

    @Field(() => UserGroupScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserGroupScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserGroupCountAggregateInput, {nullable:true})
    _count?: UserGroupCountAggregateInput;

    @Field(() => UserGroupMinAggregateInput, {nullable:true})
    _min?: UserGroupMinAggregateInput;

    @Field(() => UserGroupMaxAggregateInput, {nullable:true})
    _max?: UserGroupMaxAggregateInput;
}

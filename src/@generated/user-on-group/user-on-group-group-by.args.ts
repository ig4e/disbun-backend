import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserOnGroupWhereInput } from './user-on-group-where.input';
import { Type } from 'class-transformer';
import { UserOnGroupOrderByWithAggregationInput } from './user-on-group-order-by-with-aggregation.input';
import { UserOnGroupScalarFieldEnum } from './user-on-group-scalar-field.enum';
import { UserOnGroupScalarWhereWithAggregatesInput } from './user-on-group-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserOnGroupCountAggregateInput } from './user-on-group-count-aggregate.input';
import { UserOnGroupMinAggregateInput } from './user-on-group-min-aggregate.input';
import { UserOnGroupMaxAggregateInput } from './user-on-group-max-aggregate.input';

@ArgsType()
export class UserOnGroupGroupByArgs {

    @Field(() => UserOnGroupWhereInput, {nullable:true})
    @Type(() => UserOnGroupWhereInput)
    where?: UserOnGroupWhereInput;

    @Field(() => [UserOnGroupOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOnGroupOrderByWithAggregationInput>;

    @Field(() => [UserOnGroupScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserOnGroupScalarFieldEnum>;

    @Field(() => UserOnGroupScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserOnGroupScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserOnGroupCountAggregateInput, {nullable:true})
    _count?: UserOnGroupCountAggregateInput;

    @Field(() => UserOnGroupMinAggregateInput, {nullable:true})
    _min?: UserOnGroupMinAggregateInput;

    @Field(() => UserOnGroupMaxAggregateInput, {nullable:true})
    _max?: UserOnGroupMaxAggregateInput;
}

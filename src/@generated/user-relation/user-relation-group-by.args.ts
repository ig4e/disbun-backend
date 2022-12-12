import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRelationWhereInput } from './user-relation-where.input';
import { Type } from 'class-transformer';
import { UserRelationOrderByWithAggregationInput } from './user-relation-order-by-with-aggregation.input';
import { UserRelationScalarFieldEnum } from './user-relation-scalar-field.enum';
import { UserRelationScalarWhereWithAggregatesInput } from './user-relation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserRelationCountAggregateInput } from './user-relation-count-aggregate.input';
import { UserRelationMinAggregateInput } from './user-relation-min-aggregate.input';
import { UserRelationMaxAggregateInput } from './user-relation-max-aggregate.input';

@ArgsType()
export class UserRelationGroupByArgs {

    @Field(() => UserRelationWhereInput, {nullable:true})
    @Type(() => UserRelationWhereInput)
    where?: UserRelationWhereInput;

    @Field(() => [UserRelationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserRelationOrderByWithAggregationInput>;

    @Field(() => [UserRelationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserRelationScalarFieldEnum>;

    @Field(() => UserRelationScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserRelationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserRelationCountAggregateInput, {nullable:true})
    _count?: UserRelationCountAggregateInput;

    @Field(() => UserRelationMinAggregateInput, {nullable:true})
    _min?: UserRelationMinAggregateInput;

    @Field(() => UserRelationMaxAggregateInput, {nullable:true})
    _max?: UserRelationMaxAggregateInput;
}

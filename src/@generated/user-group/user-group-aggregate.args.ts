import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserGroupWhereInput } from './user-group-where.input';
import { Type } from 'class-transformer';
import { UserGroupOrderByWithRelationInput } from './user-group-order-by-with-relation.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserGroupCountAggregateInput } from './user-group-count-aggregate.input';
import { UserGroupMinAggregateInput } from './user-group-min-aggregate.input';
import { UserGroupMaxAggregateInput } from './user-group-max-aggregate.input';

@ArgsType()
export class UserGroupAggregateArgs {

    @Field(() => UserGroupWhereInput, {nullable:true})
    @Type(() => UserGroupWhereInput)
    where?: UserGroupWhereInput;

    @Field(() => [UserGroupOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserGroupOrderByWithRelationInput>;

    @Field(() => UserGroupWhereUniqueInput, {nullable:true})
    cursor?: UserGroupWhereUniqueInput;

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

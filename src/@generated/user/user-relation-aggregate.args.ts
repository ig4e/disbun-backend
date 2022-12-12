import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRelationWhereInput } from '../user-relation/user-relation-where.input';
import { Type } from 'class-transformer';
import { UserRelationOrderByWithRelationInput } from '../user-relation/user-relation-order-by-with-relation.input';
import { UserRelationWhereUniqueInput } from '../user-relation/user-relation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserRelationCountAggregateInput } from '../user-relation/user-relation-count-aggregate.input';
import { UserRelationMinAggregateInput } from '../user-relation/user-relation-min-aggregate.input';
import { UserRelationMaxAggregateInput } from '../user-relation/user-relation-max-aggregate.input';

@ArgsType()
export class UserRelationAggregateArgs {

    @Field(() => UserRelationWhereInput, {nullable:true})
    @Type(() => UserRelationWhereInput)
    where?: UserRelationWhereInput;

    @Field(() => [UserRelationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserRelationOrderByWithRelationInput>;

    @Field(() => UserRelationWhereUniqueInput, {nullable:true})
    cursor?: UserRelationWhereUniqueInput;

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

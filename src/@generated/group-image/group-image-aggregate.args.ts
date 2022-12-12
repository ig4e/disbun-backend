import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupImageWhereInput } from './group-image-where.input';
import { Type } from 'class-transformer';
import { GroupImageOrderByWithRelationInput } from './group-image-order-by-with-relation.input';
import { GroupImageWhereUniqueInput } from './group-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GroupImageCountAggregateInput } from './group-image-count-aggregate.input';
import { GroupImageMinAggregateInput } from './group-image-min-aggregate.input';
import { GroupImageMaxAggregateInput } from './group-image-max-aggregate.input';

@ArgsType()
export class GroupImageAggregateArgs {

    @Field(() => GroupImageWhereInput, {nullable:true})
    @Type(() => GroupImageWhereInput)
    where?: GroupImageWhereInput;

    @Field(() => [GroupImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GroupImageOrderByWithRelationInput>;

    @Field(() => GroupImageWhereUniqueInput, {nullable:true})
    cursor?: GroupImageWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GroupImageCountAggregateInput, {nullable:true})
    _count?: GroupImageCountAggregateInput;

    @Field(() => GroupImageMinAggregateInput, {nullable:true})
    _min?: GroupImageMinAggregateInput;

    @Field(() => GroupImageMaxAggregateInput, {nullable:true})
    _max?: GroupImageMaxAggregateInput;
}

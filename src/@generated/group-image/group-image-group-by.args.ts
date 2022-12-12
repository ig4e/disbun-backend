import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupImageWhereInput } from './group-image-where.input';
import { Type } from 'class-transformer';
import { GroupImageOrderByWithAggregationInput } from './group-image-order-by-with-aggregation.input';
import { GroupImageScalarFieldEnum } from './group-image-scalar-field.enum';
import { GroupImageScalarWhereWithAggregatesInput } from './group-image-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GroupImageCountAggregateInput } from './group-image-count-aggregate.input';
import { GroupImageMinAggregateInput } from './group-image-min-aggregate.input';
import { GroupImageMaxAggregateInput } from './group-image-max-aggregate.input';

@ArgsType()
export class GroupImageGroupByArgs {

    @Field(() => GroupImageWhereInput, {nullable:true})
    @Type(() => GroupImageWhereInput)
    where?: GroupImageWhereInput;

    @Field(() => [GroupImageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GroupImageOrderByWithAggregationInput>;

    @Field(() => [GroupImageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GroupImageScalarFieldEnum>;

    @Field(() => GroupImageScalarWhereWithAggregatesInput, {nullable:true})
    having?: GroupImageScalarWhereWithAggregatesInput;

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

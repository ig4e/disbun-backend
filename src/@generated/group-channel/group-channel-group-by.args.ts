import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupChannelWhereInput } from './group-channel-where.input';
import { Type } from 'class-transformer';
import { GroupChannelOrderByWithAggregationInput } from './group-channel-order-by-with-aggregation.input';
import { GroupChannelScalarFieldEnum } from './group-channel-scalar-field.enum';
import { GroupChannelScalarWhereWithAggregatesInput } from './group-channel-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GroupChannelCountAggregateInput } from './group-channel-count-aggregate.input';
import { GroupChannelMinAggregateInput } from './group-channel-min-aggregate.input';
import { GroupChannelMaxAggregateInput } from './group-channel-max-aggregate.input';

@ArgsType()
export class GroupChannelGroupByArgs {

    @Field(() => GroupChannelWhereInput, {nullable:true})
    @Type(() => GroupChannelWhereInput)
    where?: GroupChannelWhereInput;

    @Field(() => [GroupChannelOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GroupChannelOrderByWithAggregationInput>;

    @Field(() => [GroupChannelScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GroupChannelScalarFieldEnum>;

    @Field(() => GroupChannelScalarWhereWithAggregatesInput, {nullable:true})
    having?: GroupChannelScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GroupChannelCountAggregateInput, {nullable:true})
    _count?: GroupChannelCountAggregateInput;

    @Field(() => GroupChannelMinAggregateInput, {nullable:true})
    _min?: GroupChannelMinAggregateInput;

    @Field(() => GroupChannelMaxAggregateInput, {nullable:true})
    _max?: GroupChannelMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelDmWhereInput } from './channel-dm-where.input';
import { Type } from 'class-transformer';
import { ChannelDmOrderByWithAggregationInput } from './channel-dm-order-by-with-aggregation.input';
import { ChannelDmScalarFieldEnum } from './channel-dm-scalar-field.enum';
import { ChannelDmScalarWhereWithAggregatesInput } from './channel-dm-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ChannelDmCountAggregateInput } from './channel-dm-count-aggregate.input';
import { ChannelDmMinAggregateInput } from './channel-dm-min-aggregate.input';
import { ChannelDmMaxAggregateInput } from './channel-dm-max-aggregate.input';

@ArgsType()
export class ChannelDmGroupByArgs {

    @Field(() => ChannelDmWhereInput, {nullable:true})
    @Type(() => ChannelDmWhereInput)
    where?: ChannelDmWhereInput;

    @Field(() => [ChannelDmOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ChannelDmOrderByWithAggregationInput>;

    @Field(() => [ChannelDmScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ChannelDmScalarFieldEnum>;

    @Field(() => ChannelDmScalarWhereWithAggregatesInput, {nullable:true})
    having?: ChannelDmScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChannelDmCountAggregateInput, {nullable:true})
    _count?: ChannelDmCountAggregateInput;

    @Field(() => ChannelDmMinAggregateInput, {nullable:true})
    _min?: ChannelDmMinAggregateInput;

    @Field(() => ChannelDmMaxAggregateInput, {nullable:true})
    _max?: ChannelDmMaxAggregateInput;
}

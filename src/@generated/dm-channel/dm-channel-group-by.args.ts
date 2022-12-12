import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DmChannelWhereInput } from './dm-channel-where.input';
import { Type } from 'class-transformer';
import { DmChannelOrderByWithAggregationInput } from './dm-channel-order-by-with-aggregation.input';
import { DmChannelScalarFieldEnum } from './dm-channel-scalar-field.enum';
import { DmChannelScalarWhereWithAggregatesInput } from './dm-channel-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DmChannelCountAggregateInput } from './dm-channel-count-aggregate.input';
import { DmChannelMinAggregateInput } from './dm-channel-min-aggregate.input';
import { DmChannelMaxAggregateInput } from './dm-channel-max-aggregate.input';

@ArgsType()
export class DmChannelGroupByArgs {

    @Field(() => DmChannelWhereInput, {nullable:true})
    @Type(() => DmChannelWhereInput)
    where?: DmChannelWhereInput;

    @Field(() => [DmChannelOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DmChannelOrderByWithAggregationInput>;

    @Field(() => [DmChannelScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DmChannelScalarFieldEnum>;

    @Field(() => DmChannelScalarWhereWithAggregatesInput, {nullable:true})
    having?: DmChannelScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DmChannelCountAggregateInput, {nullable:true})
    _count?: DmChannelCountAggregateInput;

    @Field(() => DmChannelMinAggregateInput, {nullable:true})
    _min?: DmChannelMinAggregateInput;

    @Field(() => DmChannelMaxAggregateInput, {nullable:true})
    _max?: DmChannelMaxAggregateInput;
}

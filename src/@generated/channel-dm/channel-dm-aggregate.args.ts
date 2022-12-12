import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelDmWhereInput } from './channel-dm-where.input';
import { Type } from 'class-transformer';
import { ChannelDmOrderByWithRelationInput } from './channel-dm-order-by-with-relation.input';
import { ChannelDmWhereUniqueInput } from './channel-dm-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChannelDmCountAggregateInput } from './channel-dm-count-aggregate.input';
import { ChannelDmMinAggregateInput } from './channel-dm-min-aggregate.input';
import { ChannelDmMaxAggregateInput } from './channel-dm-max-aggregate.input';

@ArgsType()
export class ChannelDmAggregateArgs {

    @Field(() => ChannelDmWhereInput, {nullable:true})
    @Type(() => ChannelDmWhereInput)
    where?: ChannelDmWhereInput;

    @Field(() => [ChannelDmOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChannelDmOrderByWithRelationInput>;

    @Field(() => ChannelDmWhereUniqueInput, {nullable:true})
    cursor?: ChannelDmWhereUniqueInput;

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

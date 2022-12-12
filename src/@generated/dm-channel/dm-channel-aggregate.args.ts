import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DmChannelWhereInput } from './dm-channel-where.input';
import { Type } from 'class-transformer';
import { DmChannelOrderByWithRelationInput } from './dm-channel-order-by-with-relation.input';
import { DmChannelWhereUniqueInput } from './dm-channel-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DmChannelCountAggregateInput } from './dm-channel-count-aggregate.input';
import { DmChannelMinAggregateInput } from './dm-channel-min-aggregate.input';
import { DmChannelMaxAggregateInput } from './dm-channel-max-aggregate.input';

@ArgsType()
export class DmChannelAggregateArgs {

    @Field(() => DmChannelWhereInput, {nullable:true})
    @Type(() => DmChannelWhereInput)
    where?: DmChannelWhereInput;

    @Field(() => [DmChannelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DmChannelOrderByWithRelationInput>;

    @Field(() => DmChannelWhereUniqueInput, {nullable:true})
    cursor?: DmChannelWhereUniqueInput;

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

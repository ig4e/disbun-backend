import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChannelDmCountAggregate } from './channel-dm-count-aggregate.output';
import { ChannelDmMinAggregate } from './channel-dm-min-aggregate.output';
import { ChannelDmMaxAggregate } from './channel-dm-max-aggregate.output';

@ObjectType()
export class AggregateChannelDm {

    @Field(() => ChannelDmCountAggregate, {nullable:true})
    _count?: ChannelDmCountAggregate;

    @Field(() => ChannelDmMinAggregate, {nullable:true})
    _min?: ChannelDmMinAggregate;

    @Field(() => ChannelDmMaxAggregate, {nullable:true})
    _max?: ChannelDmMaxAggregate;
}

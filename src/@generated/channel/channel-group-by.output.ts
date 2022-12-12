import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChannelType } from '../prisma/channel-type.enum';
import { ChannelCountAggregate } from './channel-count-aggregate.output';
import { ChannelMinAggregate } from './channel-min-aggregate.output';
import { ChannelMaxAggregate } from './channel-max-aggregate.output';

@ObjectType()
export class ChannelGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => ChannelType, {nullable:false})
    type!: keyof typeof ChannelType;

    @Field(() => ChannelCountAggregate, {nullable:true})
    _count?: ChannelCountAggregate;

    @Field(() => ChannelMinAggregate, {nullable:true})
    _min?: ChannelMinAggregate;

    @Field(() => ChannelMaxAggregate, {nullable:true})
    _max?: ChannelMaxAggregate;
}

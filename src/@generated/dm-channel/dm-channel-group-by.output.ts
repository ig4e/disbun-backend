import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { DmChannelCountAggregate } from './dm-channel-count-aggregate.output';
import { DmChannelMinAggregate } from './dm-channel-min-aggregate.output';
import { DmChannelMaxAggregate } from './dm-channel-max-aggregate.output';

@ObjectType()
export class DmChannelGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @HideField()
    userRelationRelatedUserId!: string;

    @HideField()
    userRelationUserId!: string;

    @Field(() => DmChannelCountAggregate, {nullable:true})
    _count?: DmChannelCountAggregate;

    @Field(() => DmChannelMinAggregate, {nullable:true})
    _min?: DmChannelMinAggregate;

    @Field(() => DmChannelMaxAggregate, {nullable:true})
    _max?: DmChannelMaxAggregate;
}

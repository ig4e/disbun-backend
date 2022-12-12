import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GroupChannelCountAggregate } from './group-channel-count-aggregate.output';
import { GroupChannelMinAggregate } from './group-channel-min-aggregate.output';
import { GroupChannelMaxAggregate } from './group-channel-max-aggregate.output';

@ObjectType()
export class GroupChannelGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @HideField()
    userGroupId!: string;

    @Field(() => GroupChannelCountAggregate, {nullable:true})
    _count?: GroupChannelCountAggregate;

    @Field(() => GroupChannelMinAggregate, {nullable:true})
    _min?: GroupChannelMinAggregate;

    @Field(() => GroupChannelMaxAggregate, {nullable:true})
    _max?: GroupChannelMaxAggregate;
}

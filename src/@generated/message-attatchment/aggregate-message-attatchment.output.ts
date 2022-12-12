import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessageAttatchmentCountAggregate } from './message-attatchment-count-aggregate.output';
import { MessageAttatchmentAvgAggregate } from './message-attatchment-avg-aggregate.output';
import { MessageAttatchmentSumAggregate } from './message-attatchment-sum-aggregate.output';
import { MessageAttatchmentMinAggregate } from './message-attatchment-min-aggregate.output';
import { MessageAttatchmentMaxAggregate } from './message-attatchment-max-aggregate.output';

@ObjectType()
export class AggregateMessageAttatchment {

    @Field(() => MessageAttatchmentCountAggregate, {nullable:true})
    _count?: MessageAttatchmentCountAggregate;

    @Field(() => MessageAttatchmentAvgAggregate, {nullable:true})
    _avg?: MessageAttatchmentAvgAggregate;

    @Field(() => MessageAttatchmentSumAggregate, {nullable:true})
    _sum?: MessageAttatchmentSumAggregate;

    @Field(() => MessageAttatchmentMinAggregate, {nullable:true})
    _min?: MessageAttatchmentMinAggregate;

    @Field(() => MessageAttatchmentMaxAggregate, {nullable:true})
    _max?: MessageAttatchmentMaxAggregate;
}

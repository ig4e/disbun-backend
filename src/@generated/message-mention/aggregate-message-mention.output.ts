import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessageMentionCountAggregate } from './message-mention-count-aggregate.output';
import { MessageMentionMinAggregate } from './message-mention-min-aggregate.output';
import { MessageMentionMaxAggregate } from './message-mention-max-aggregate.output';

@ObjectType()
export class AggregateMessageMention {

    @Field(() => MessageMentionCountAggregate, {nullable:true})
    _count?: MessageMentionCountAggregate;

    @Field(() => MessageMentionMinAggregate, {nullable:true})
    _min?: MessageMentionMinAggregate;

    @Field(() => MessageMentionMaxAggregate, {nullable:true})
    _max?: MessageMentionMaxAggregate;
}

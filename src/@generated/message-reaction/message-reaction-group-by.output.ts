import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessageReactionCountAggregate } from './message-reaction-count-aggregate.output';
import { MessageReactionMinAggregate } from './message-reaction-min-aggregate.output';
import { MessageReactionMaxAggregate } from './message-reaction-max-aggregate.output';

@ObjectType()
export class MessageReactionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    emoji!: string;

    @Field(() => String, {nullable:false})
    messageId!: string;

    @Field(() => MessageReactionCountAggregate, {nullable:true})
    _count?: MessageReactionCountAggregate;

    @Field(() => MessageReactionMinAggregate, {nullable:true})
    _min?: MessageReactionMinAggregate;

    @Field(() => MessageReactionMaxAggregate, {nullable:true})
    _max?: MessageReactionMaxAggregate;
}

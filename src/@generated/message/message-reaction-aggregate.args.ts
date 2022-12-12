import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageReactionWhereInput } from '../message-reaction/message-reaction-where.input';
import { Type } from 'class-transformer';
import { MessageReactionOrderByWithRelationInput } from '../message-reaction/message-reaction-order-by-with-relation.input';
import { MessageReactionWhereUniqueInput } from '../message-reaction/message-reaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessageReactionCountAggregateInput } from '../message-reaction/message-reaction-count-aggregate.input';
import { MessageReactionMinAggregateInput } from '../message-reaction/message-reaction-min-aggregate.input';
import { MessageReactionMaxAggregateInput } from '../message-reaction/message-reaction-max-aggregate.input';

@ArgsType()
export class MessageReactionAggregateArgs {

    @Field(() => MessageReactionWhereInput, {nullable:true})
    @Type(() => MessageReactionWhereInput)
    where?: MessageReactionWhereInput;

    @Field(() => [MessageReactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageReactionOrderByWithRelationInput>;

    @Field(() => MessageReactionWhereUniqueInput, {nullable:true})
    cursor?: MessageReactionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MessageReactionCountAggregateInput, {nullable:true})
    _count?: MessageReactionCountAggregateInput;

    @Field(() => MessageReactionMinAggregateInput, {nullable:true})
    _min?: MessageReactionMinAggregateInput;

    @Field(() => MessageReactionMaxAggregateInput, {nullable:true})
    _max?: MessageReactionMaxAggregateInput;
}

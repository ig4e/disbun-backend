import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Message } from '../message/message.model';
import { MessageReactionCount } from '../message/message-reaction-count.output';

@ObjectType()
export class MessageReaction {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    emoji!: string;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => Message, {nullable:false})
    message?: Message;

    @Field(() => String, {nullable:false})
    messageId!: string;

    @Field(() => MessageReactionCount, {nullable:false})
    _count?: MessageReactionCount;
}

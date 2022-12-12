import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Message } from '../message/message.model';
import { MessageMentionCount } from '../message/message-mention-count.output';

@ObjectType()
export class MessageMention {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => Message, {nullable:false})
    message?: Message;

    @Field(() => String, {nullable:false})
    messageId!: string;

    @Field(() => MessageMentionCount, {nullable:false})
    _count?: MessageMentionCount;
}

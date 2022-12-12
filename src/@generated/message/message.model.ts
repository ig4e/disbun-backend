import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Attachment } from '../attachment/attachment.model';
import { MessageReaction } from '../message-reaction/message-reaction.model';
import { DmChannel } from '../dm-channel/dm-channel.model';
import { GroupChannel } from '../group-channel/group-channel.model';
import { HideField } from '@nestjs/graphql';
import { MessageCount } from './message-count.output';

@ObjectType()
export class Message {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    pinned!: boolean;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => String, {nullable:true})
    content!: string | null;

    @Field(() => [Attachment], {nullable:true})
    attachments?: Array<Attachment>;

    @Field(() => [MessageReaction], {nullable:true})
    reactions?: Array<MessageReaction>;

    @Field(() => Message, {nullable:true})
    references?: Message | null;

    @Field(() => [Message], {nullable:true})
    referencedIn?: Array<Message>;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:true})
    refrenceId!: string | null;

    @Field(() => DmChannel, {nullable:false})
    channel?: DmChannel;

    @Field(() => String, {nullable:false})
    channelId!: string;

    @Field(() => GroupChannel, {nullable:true})
    groupChannel?: GroupChannel | null;

    @HideField()
    groupChannelId!: string | null;

    @Field(() => MessageCount, {nullable:false})
    _count?: MessageCount;
}

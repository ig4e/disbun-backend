import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AttachmentListRelationFilter } from '../attachment/attachment-list-relation-filter.input';
import { MessageReactionListRelationFilter } from '../message-reaction/message-reaction-list-relation-filter.input';
import { MessageRelationFilter } from './message-relation-filter.input';
import { MessageListRelationFilter } from './message-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DmChannelRelationFilter } from '../dm-channel/dm-channel-relation-filter.input';
import { GroupChannelRelationFilter } from '../group-channel/group-channel-relation-filter.input';

@InputType()
export class MessageWhereInput {

    @Field(() => [MessageWhereInput], {nullable:true})
    AND?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    OR?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    NOT?: Array<MessageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    pinned?: BoolFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => AttachmentListRelationFilter, {nullable:true})
    attachments?: AttachmentListRelationFilter;

    @Field(() => MessageReactionListRelationFilter, {nullable:true})
    reactions?: MessageReactionListRelationFilter;

    @Field(() => MessageRelationFilter, {nullable:true})
    references?: MessageRelationFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    referencedIn?: MessageListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    refrenceId?: StringNullableFilter;

    @Field(() => DmChannelRelationFilter, {nullable:true})
    channel?: DmChannelRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    channelId?: StringFilter;

    @Field(() => GroupChannelRelationFilter, {nullable:true})
    groupChannel?: GroupChannelRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    groupChannelId?: StringNullableFilter;
}

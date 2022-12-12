import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { AttachmentOrderByRelationAggregateInput } from '../attachment/attachment-order-by-relation-aggregate.input';
import { MessageReactionOrderByRelationAggregateInput } from '../message-reaction/message-reaction-order-by-relation-aggregate.input';
import { MessageOrderByRelationAggregateInput } from './message-order-by-relation-aggregate.input';
import { DmChannelOrderByWithRelationInput } from '../dm-channel/dm-channel-order-by-with-relation.input';
import { GroupChannelOrderByWithRelationInput } from '../group-channel/group-channel-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class MessageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pinned?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => AttachmentOrderByRelationAggregateInput, {nullable:true})
    attachments?: AttachmentOrderByRelationAggregateInput;

    @Field(() => MessageReactionOrderByRelationAggregateInput, {nullable:true})
    reactions?: MessageReactionOrderByRelationAggregateInput;

    @Field(() => MessageOrderByWithRelationInput, {nullable:true})
    references?: MessageOrderByWithRelationInput;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    referencedIn?: MessageOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    refrenceId?: keyof typeof SortOrder;

    @Field(() => DmChannelOrderByWithRelationInput, {nullable:true})
    channel?: DmChannelOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    channelId?: keyof typeof SortOrder;

    @Field(() => GroupChannelOrderByWithRelationInput, {nullable:true})
    groupChannel?: GroupChannelOrderByWithRelationInput;

    @HideField()
    groupChannelId?: keyof typeof SortOrder;
}

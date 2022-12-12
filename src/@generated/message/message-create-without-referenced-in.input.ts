import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMessagesInput } from '../user/user-create-nested-one-without-messages.input';
import { AttachmentCreateNestedManyWithoutMessageInput } from '../attachment/attachment-create-nested-many-without-message.input';
import { MessageReactionCreateNestedManyWithoutMessageInput } from '../message-reaction/message-reaction-create-nested-many-without-message.input';
import { MessageCreateNestedOneWithoutReferencedInInput } from './message-create-nested-one-without-referenced-in.input';
import { DmChannelCreateNestedOneWithoutMessagesInput } from '../dm-channel/dm-channel-create-nested-one-without-messages.input';
import { GroupChannelCreateNestedOneWithoutMessagesInput } from '../group-channel/group-channel-create-nested-one-without-messages.input';

@InputType()
export class MessageCreateWithoutReferencedInInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    pinned?: boolean;

    @Field(() => UserCreateNestedOneWithoutMessagesInput, {nullable:false})
    author!: UserCreateNestedOneWithoutMessagesInput;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => AttachmentCreateNestedManyWithoutMessageInput, {nullable:true})
    attachments?: AttachmentCreateNestedManyWithoutMessageInput;

    @Field(() => MessageReactionCreateNestedManyWithoutMessageInput, {nullable:true})
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput;

    @Field(() => MessageCreateNestedOneWithoutReferencedInInput, {nullable:true})
    references?: MessageCreateNestedOneWithoutReferencedInInput;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => DmChannelCreateNestedOneWithoutMessagesInput, {nullable:false})
    channel!: DmChannelCreateNestedOneWithoutMessagesInput;

    @Field(() => GroupChannelCreateNestedOneWithoutMessagesInput, {nullable:true})
    groupChannel?: GroupChannelCreateNestedOneWithoutMessagesInput;
}

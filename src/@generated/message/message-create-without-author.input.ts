import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentCreateNestedManyWithoutMessageInput } from '../attachment/attachment-create-nested-many-without-message.input';
import { MessageReactionCreateNestedManyWithoutMessageInput } from '../message-reaction/message-reaction-create-nested-many-without-message.input';
import { MessageCreateNestedOneWithoutReferencedInInput } from './message-create-nested-one-without-referenced-in.input';
import { MessageCreateNestedManyWithoutReferencesInput } from './message-create-nested-many-without-references.input';
import { DmChannelCreateNestedOneWithoutMessagesInput } from '../dm-channel/dm-channel-create-nested-one-without-messages.input';
import { GroupChannelCreateNestedOneWithoutMessagesInput } from '../group-channel/group-channel-create-nested-one-without-messages.input';

@InputType()
export class MessageCreateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    pinned?: boolean;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => AttachmentCreateNestedManyWithoutMessageInput, {nullable:true})
    attachments?: AttachmentCreateNestedManyWithoutMessageInput;

    @Field(() => MessageReactionCreateNestedManyWithoutMessageInput, {nullable:true})
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput;

    @Field(() => MessageCreateNestedOneWithoutReferencedInInput, {nullable:true})
    references?: MessageCreateNestedOneWithoutReferencedInInput;

    @Field(() => MessageCreateNestedManyWithoutReferencesInput, {nullable:true})
    referencedIn?: MessageCreateNestedManyWithoutReferencesInput;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => DmChannelCreateNestedOneWithoutMessagesInput, {nullable:false})
    channel!: DmChannelCreateNestedOneWithoutMessagesInput;

    @Field(() => GroupChannelCreateNestedOneWithoutMessagesInput, {nullable:true})
    groupChannel?: GroupChannelCreateNestedOneWithoutMessagesInput;
}
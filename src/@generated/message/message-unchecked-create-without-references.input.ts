import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentUncheckedCreateNestedManyWithoutMessageInput } from '../attachment/attachment-unchecked-create-nested-many-without-message.input';
import { MessageReactionUncheckedCreateNestedManyWithoutMessageInput } from '../message-reaction/message-reaction-unchecked-create-nested-many-without-message.input';
import { MessageUncheckedCreateNestedManyWithoutReferencesInput } from './message-unchecked-create-nested-many-without-references.input';

@InputType()
export class MessageUncheckedCreateWithoutReferencesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    pinned?: boolean;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => AttachmentUncheckedCreateNestedManyWithoutMessageInput, {nullable:true})
    attachments?: AttachmentUncheckedCreateNestedManyWithoutMessageInput;

    @Field(() => MessageReactionUncheckedCreateNestedManyWithoutMessageInput, {nullable:true})
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput;

    @Field(() => MessageUncheckedCreateNestedManyWithoutReferencesInput, {nullable:true})
    referencedIn?: MessageUncheckedCreateNestedManyWithoutReferencesInput;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    channelId!: string;

    @Field(() => String, {nullable:true})
    groupChannelId?: string;
}

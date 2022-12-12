import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentUncheckedCreateNestedManyWithoutMessageInput } from '../attachment/attachment-unchecked-create-nested-many-without-message.input';
import { MessageReactionUncheckedCreateNestedManyWithoutMessageInput } from '../message-reaction/message-reaction-unchecked-create-nested-many-without-message.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class MessageUncheckedCreateWithoutReferencedInInput {

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

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:true})
    refrenceId?: string;

    @Field(() => String, {nullable:false})
    channelId!: string;

    @HideField()
    groupChannelId?: string;
}

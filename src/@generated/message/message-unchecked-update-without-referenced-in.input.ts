import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AttachmentUncheckedUpdateManyWithoutMessageNestedInput } from '../attachment/attachment-unchecked-update-many-without-message-nested.input';
import { MessageReactionUncheckedUpdateManyWithoutMessageNestedInput } from '../message-reaction/message-reaction-unchecked-update-many-without-message-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class MessageUncheckedUpdateWithoutReferencedInInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    pinned?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    content?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AttachmentUncheckedUpdateManyWithoutMessageNestedInput, {nullable:true})
    attachments?: AttachmentUncheckedUpdateManyWithoutMessageNestedInput;

    @Field(() => MessageReactionUncheckedUpdateManyWithoutMessageNestedInput, {nullable:true})
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    refrenceId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    channelId?: StringFieldUpdateOperationsInput;

    @HideField()
    groupChannelId?: NullableStringFieldUpdateOperationsInput;
}

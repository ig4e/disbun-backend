import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AttachmentUpdateManyWithoutMessageNestedInput } from '../attachment/attachment-update-many-without-message-nested.input';
import { MessageReactionUpdateManyWithoutMessageNestedInput } from '../message-reaction/message-reaction-update-many-without-message-nested.input';
import { MessageUpdateOneWithoutReferencedInNestedInput } from './message-update-one-without-referenced-in-nested.input';
import { MessageUpdateManyWithoutReferencesNestedInput } from './message-update-many-without-references-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DmChannelUpdateOneRequiredWithoutMessagesNestedInput } from '../dm-channel/dm-channel-update-one-required-without-messages-nested.input';
import { GroupChannelUpdateOneWithoutMessagesNestedInput } from '../group-channel/group-channel-update-one-without-messages-nested.input';

@InputType()
export class MessageUpdateWithoutAuthorInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    pinned?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    content?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AttachmentUpdateManyWithoutMessageNestedInput, {nullable:true})
    attachments?: AttachmentUpdateManyWithoutMessageNestedInput;

    @Field(() => MessageReactionUpdateManyWithoutMessageNestedInput, {nullable:true})
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput;

    @Field(() => MessageUpdateOneWithoutReferencedInNestedInput, {nullable:true})
    references?: MessageUpdateOneWithoutReferencedInNestedInput;

    @Field(() => MessageUpdateManyWithoutReferencesNestedInput, {nullable:true})
    referencedIn?: MessageUpdateManyWithoutReferencesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DmChannelUpdateOneRequiredWithoutMessagesNestedInput, {nullable:true})
    channel?: DmChannelUpdateOneRequiredWithoutMessagesNestedInput;

    @Field(() => GroupChannelUpdateOneWithoutMessagesNestedInput, {nullable:true})
    groupChannel?: GroupChannelUpdateOneWithoutMessagesNestedInput;
}

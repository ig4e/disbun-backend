import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MessageAttatchmentUpdateManyWithoutMessageNestedInput } from '../message-attatchment/message-attatchment-update-many-without-message-nested.input';
import { MessageReactionUpdateManyWithoutMessageNestedInput } from '../message-reaction/message-reaction-update-many-without-message-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ChannelDmUpdateOneRequiredWithoutMessagesNestedInput } from '../channel-dm/channel-dm-update-one-required-without-messages-nested.input';

@InputType()
export class MessageUpdateWithoutMentionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => MessageAttatchmentUpdateManyWithoutMessageNestedInput, {nullable:true})
    attachments?: MessageAttatchmentUpdateManyWithoutMessageNestedInput;

    @Field(() => MessageReactionUpdateManyWithoutMessageNestedInput, {nullable:true})
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ChannelDmUpdateOneRequiredWithoutMessagesNestedInput, {nullable:true})
    ChannelDm?: ChannelDmUpdateOneRequiredWithoutMessagesNestedInput;
}

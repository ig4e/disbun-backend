import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MessageMentionUncheckedUpdateManyWithoutMessageNestedInput } from '../message-mention/message-mention-unchecked-update-many-without-message-nested.input';
import { MessageAttatchmentUncheckedUpdateManyWithoutMessageNestedInput } from '../message-attatchment/message-attatchment-unchecked-update-many-without-message-nested.input';
import { MessageReactionUncheckedUpdateManyWithoutMessageNestedInput } from '../message-reaction/message-reaction-unchecked-update-many-without-message-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class MessageUncheckedUpdateWithoutChannelDmInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => MessageMentionUncheckedUpdateManyWithoutMessageNestedInput, {nullable:true})
    mentions?: MessageMentionUncheckedUpdateManyWithoutMessageNestedInput;

    @Field(() => MessageAttatchmentUncheckedUpdateManyWithoutMessageNestedInput, {nullable:true})
    attachments?: MessageAttatchmentUncheckedUpdateManyWithoutMessageNestedInput;

    @Field(() => MessageReactionUncheckedUpdateManyWithoutMessageNestedInput, {nullable:true})
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}

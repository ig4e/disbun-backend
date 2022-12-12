import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MessageMentionUpdateManyWithoutMessageNestedInput } from '../message-mention/message-mention-update-many-without-message-nested.input';
import { MessageAttatchmentUpdateManyWithoutMessageNestedInput } from '../message-attatchment/message-attatchment-update-many-without-message-nested.input';
import { MessageReactionUpdateManyWithoutMessageNestedInput } from '../message-reaction/message-reaction-update-many-without-message-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class MessageUpdateWithoutChannelDmInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => MessageMentionUpdateManyWithoutMessageNestedInput, {nullable:true})
    mentions?: MessageMentionUpdateManyWithoutMessageNestedInput;

    @Field(() => MessageAttatchmentUpdateManyWithoutMessageNestedInput, {nullable:true})
    attachments?: MessageAttatchmentUpdateManyWithoutMessageNestedInput;

    @Field(() => MessageReactionUpdateManyWithoutMessageNestedInput, {nullable:true})
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}

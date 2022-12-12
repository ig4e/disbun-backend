import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MessageUpdateOneRequiredWithoutAttachmentsNestedInput } from '../message/message-update-one-required-without-attachments-nested.input';

@InputType()
export class MessageAttatchmentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    contentType?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    size?: IntFieldUpdateOperationsInput;

    @Field(() => MessageUpdateOneRequiredWithoutAttachmentsNestedInput, {nullable:true})
    message?: MessageUpdateOneRequiredWithoutAttachmentsNestedInput;
}

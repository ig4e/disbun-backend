import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MessageUpdateOneRequiredWithoutMentionsNestedInput } from '../message/message-update-one-required-without-mentions-nested.input';

@InputType()
export class MessageMentionUpdateWithoutUsersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => MessageUpdateOneRequiredWithoutMentionsNestedInput, {nullable:true})
    message?: MessageUpdateOneRequiredWithoutMentionsNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateManyWithoutMessageReactionNestedInput } from '../user/user-update-many-without-message-reaction-nested.input';
import { MessageUpdateOneRequiredWithoutReactionsNestedInput } from '../message/message-update-one-required-without-reactions-nested.input';

@InputType()
export class MessageReactionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emoji?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutMessageReactionNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutMessageReactionNestedInput;

    @Field(() => MessageUpdateOneRequiredWithoutReactionsNestedInput, {nullable:true})
    message?: MessageUpdateOneRequiredWithoutReactionsNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateManyWithoutMessageMentionNestedInput } from '../user/user-update-many-without-message-mention-nested.input';
import { MessageUpdateOneRequiredWithoutMentionsNestedInput } from '../message/message-update-one-required-without-mentions-nested.input';

@InputType()
export class MessageMentionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutMessageMentionNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutMessageMentionNestedInput;

    @Field(() => MessageUpdateOneRequiredWithoutMentionsNestedInput, {nullable:true})
    message?: MessageUpdateOneRequiredWithoutMentionsNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateManyWithoutMessageReactionsNestedInput } from '../user/user-update-many-without-message-reactions-nested.input';

@InputType()
export class MessageReactionUpdateWithoutMessageInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emoji?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutMessageReactionsNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutMessageReactionsNestedInput;
}

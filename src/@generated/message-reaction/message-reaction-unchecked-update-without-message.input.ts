import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutMessageReactionsNestedInput } from '../user/user-unchecked-update-many-without-message-reactions-nested.input';

@InputType()
export class MessageReactionUncheckedUpdateWithoutMessageInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emoji?: StringFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutMessageReactionsNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutMessageReactionsNestedInput;
}

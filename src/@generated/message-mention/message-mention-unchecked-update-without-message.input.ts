import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutMessageMentionNestedInput } from '../user/user-unchecked-update-many-without-message-mention-nested.input';

@InputType()
export class MessageMentionUncheckedUpdateWithoutMessageInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutMessageMentionNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutMessageMentionNestedInput;
}

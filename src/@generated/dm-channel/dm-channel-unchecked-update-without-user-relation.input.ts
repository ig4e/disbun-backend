import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MessageUncheckedUpdateManyWithoutChannelNestedInput } from '../message/message-unchecked-update-many-without-channel-nested.input';

@InputType()
export class DmChannelUncheckedUpdateWithoutUserRelationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => MessageUncheckedUpdateManyWithoutChannelNestedInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput;
}

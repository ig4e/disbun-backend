import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MessageUpdateManyWithoutChannelNestedInput } from '../message/message-update-many-without-channel-nested.input';

@InputType()
export class DmChannelUpdateWithoutUserRelationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => MessageUpdateManyWithoutChannelNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutChannelNestedInput;
}

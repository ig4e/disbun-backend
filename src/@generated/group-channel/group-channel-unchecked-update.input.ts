import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MessageUncheckedUpdateManyWithoutGroupChannelNestedInput } from '../message/message-unchecked-update-many-without-group-channel-nested.input';

@InputType()
export class GroupChannelUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => MessageUncheckedUpdateManyWithoutGroupChannelNestedInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutGroupChannelNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userGroupId?: StringFieldUpdateOperationsInput;
}

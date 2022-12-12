import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MessageUpdateManyWithoutGroupChannelNestedInput } from '../message/message-update-many-without-group-channel-nested.input';

@InputType()
export class GroupChannelUpdateWithoutGroupInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => MessageUpdateManyWithoutGroupChannelNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutGroupChannelNestedInput;
}

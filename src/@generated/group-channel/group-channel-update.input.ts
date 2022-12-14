import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MessageUpdateManyWithoutGroupChannelNestedInput } from '../message/message-update-many-without-group-channel-nested.input';
import { UserGroupUpdateOneRequiredWithoutChannelNestedInput } from '../user-group/user-group-update-one-required-without-channel-nested.input';

@InputType()
export class GroupChannelUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => MessageUpdateManyWithoutGroupChannelNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutGroupChannelNestedInput;

    @Field(() => UserGroupUpdateOneRequiredWithoutChannelNestedInput, {nullable:true})
    group?: UserGroupUpdateOneRequiredWithoutChannelNestedInput;
}

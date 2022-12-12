import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumChannelTypeFieldUpdateOperationsInput } from '../prisma/enum-channel-type-field-update-operations.input';
import { MessageUncheckedUpdateManyWithoutChannelNestedInput } from '../message/message-unchecked-update-many-without-channel-nested.input';
import { UserGroupUncheckedUpdateManyWithoutChannelNestedInput } from '../user-group/user-group-unchecked-update-many-without-channel-nested.input';

@InputType()
export class ChannelUncheckedUpdateWithoutUserRelationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumChannelTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumChannelTypeFieldUpdateOperationsInput;

    @Field(() => MessageUncheckedUpdateManyWithoutChannelNestedInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput;

    @Field(() => UserGroupUncheckedUpdateManyWithoutChannelNestedInput, {nullable:true})
    UserGroups?: UserGroupUncheckedUpdateManyWithoutChannelNestedInput;
}

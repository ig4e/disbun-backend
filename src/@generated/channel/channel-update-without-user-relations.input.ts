import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumChannelTypeFieldUpdateOperationsInput } from '../prisma/enum-channel-type-field-update-operations.input';
import { MessageUpdateManyWithoutChannelNestedInput } from '../message/message-update-many-without-channel-nested.input';
import { UserGroupUpdateManyWithoutChannelNestedInput } from '../user-group/user-group-update-many-without-channel-nested.input';

@InputType()
export class ChannelUpdateWithoutUserRelationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumChannelTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumChannelTypeFieldUpdateOperationsInput;

    @Field(() => MessageUpdateManyWithoutChannelNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutChannelNestedInput;

    @Field(() => UserGroupUpdateManyWithoutChannelNestedInput, {nullable:true})
    UserGroups?: UserGroupUpdateManyWithoutChannelNestedInput;
}

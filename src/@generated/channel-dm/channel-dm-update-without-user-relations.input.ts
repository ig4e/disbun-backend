import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumChannelTypeFieldUpdateOperationsInput } from '../prisma/enum-channel-type-field-update-operations.input';
import { MessageUpdateManyWithoutChannelDmNestedInput } from '../message/message-update-many-without-channel-dm-nested.input';
import { UserGroupUpdateManyWithoutChannelDmNestedInput } from '../user-group/user-group-update-many-without-channel-dm-nested.input';

@InputType()
export class ChannelDmUpdateWithoutUserRelationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumChannelTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumChannelTypeFieldUpdateOperationsInput;

    @Field(() => MessageUpdateManyWithoutChannelDmNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutChannelDmNestedInput;

    @Field(() => UserGroupUpdateManyWithoutChannelDmNestedInput, {nullable:true})
    UserGroups?: UserGroupUpdateManyWithoutChannelDmNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumChannelTypeFieldUpdateOperationsInput } from '../prisma/enum-channel-type-field-update-operations.input';
import { MessageUncheckedUpdateManyWithoutChannelNestedInput } from '../message/message-unchecked-update-many-without-channel-nested.input';
import { UserRelationUncheckedUpdateManyWithoutDmNestedInput } from '../user-relation/user-relation-unchecked-update-many-without-dm-nested.input';

@InputType()
export class ChannelUncheckedUpdateWithoutUserGroupsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumChannelTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumChannelTypeFieldUpdateOperationsInput;

    @Field(() => MessageUncheckedUpdateManyWithoutChannelNestedInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput;

    @Field(() => UserRelationUncheckedUpdateManyWithoutDmNestedInput, {nullable:true})
    UserRelations?: UserRelationUncheckedUpdateManyWithoutDmNestedInput;
}

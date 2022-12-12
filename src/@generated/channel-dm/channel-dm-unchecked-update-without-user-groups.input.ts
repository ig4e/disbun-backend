import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumChannelTypeFieldUpdateOperationsInput } from '../prisma/enum-channel-type-field-update-operations.input';
import { MessageUncheckedUpdateManyWithoutChannelDmNestedInput } from '../message/message-unchecked-update-many-without-channel-dm-nested.input';
import { UserRelationUncheckedUpdateManyWithoutDmNestedInput } from '../user-relation/user-relation-unchecked-update-many-without-dm-nested.input';

@InputType()
export class ChannelDmUncheckedUpdateWithoutUserGroupsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumChannelTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumChannelTypeFieldUpdateOperationsInput;

    @Field(() => MessageUncheckedUpdateManyWithoutChannelDmNestedInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutChannelDmNestedInput;

    @Field(() => UserRelationUncheckedUpdateManyWithoutDmNestedInput, {nullable:true})
    UserRelations?: UserRelationUncheckedUpdateManyWithoutDmNestedInput;
}

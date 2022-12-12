import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumChannelTypeFieldUpdateOperationsInput } from '../prisma/enum-channel-type-field-update-operations.input';
import { MessageUpdateManyWithoutChannelDmNestedInput } from '../message/message-update-many-without-channel-dm-nested.input';
import { UserRelationUpdateManyWithoutDmNestedInput } from '../user-relation/user-relation-update-many-without-dm-nested.input';

@InputType()
export class ChannelDmUpdateWithoutUserGroupsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumChannelTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumChannelTypeFieldUpdateOperationsInput;

    @Field(() => MessageUpdateManyWithoutChannelDmNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutChannelDmNestedInput;

    @Field(() => UserRelationUpdateManyWithoutDmNestedInput, {nullable:true})
    UserRelations?: UserRelationUpdateManyWithoutDmNestedInput;
}

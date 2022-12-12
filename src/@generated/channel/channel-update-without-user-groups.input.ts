import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumChannelTypeFieldUpdateOperationsInput } from '../prisma/enum-channel-type-field-update-operations.input';
import { MessageUpdateManyWithoutChannelNestedInput } from '../message/message-update-many-without-channel-nested.input';
import { UserRelationUpdateManyWithoutDmNestedInput } from '../user-relation/user-relation-update-many-without-dm-nested.input';

@InputType()
export class ChannelUpdateWithoutUserGroupsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumChannelTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumChannelTypeFieldUpdateOperationsInput;

    @Field(() => MessageUpdateManyWithoutChannelNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutChannelNestedInput;

    @Field(() => UserRelationUpdateManyWithoutDmNestedInput, {nullable:true})
    UserRelations?: UserRelationUpdateManyWithoutDmNestedInput;
}

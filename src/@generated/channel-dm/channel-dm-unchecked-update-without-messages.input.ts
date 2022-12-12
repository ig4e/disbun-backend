import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumChannelTypeFieldUpdateOperationsInput } from '../prisma/enum-channel-type-field-update-operations.input';
import { UserRelationUncheckedUpdateManyWithoutDmNestedInput } from '../user-relation/user-relation-unchecked-update-many-without-dm-nested.input';
import { UserGroupUncheckedUpdateManyWithoutChannelDmNestedInput } from '../user-group/user-group-unchecked-update-many-without-channel-dm-nested.input';

@InputType()
export class ChannelDmUncheckedUpdateWithoutMessagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumChannelTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumChannelTypeFieldUpdateOperationsInput;

    @Field(() => UserRelationUncheckedUpdateManyWithoutDmNestedInput, {nullable:true})
    UserRelations?: UserRelationUncheckedUpdateManyWithoutDmNestedInput;

    @Field(() => UserGroupUncheckedUpdateManyWithoutChannelDmNestedInput, {nullable:true})
    UserGroups?: UserGroupUncheckedUpdateManyWithoutChannelDmNestedInput;
}

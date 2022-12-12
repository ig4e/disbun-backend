import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumChannelTypeFieldUpdateOperationsInput } from '../prisma/enum-channel-type-field-update-operations.input';
import { UserRelationUpdateManyWithoutDmNestedInput } from '../user-relation/user-relation-update-many-without-dm-nested.input';
import { UserGroupUpdateManyWithoutChannelDmNestedInput } from '../user-group/user-group-update-many-without-channel-dm-nested.input';

@InputType()
export class ChannelDmUpdateWithoutMessagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumChannelTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumChannelTypeFieldUpdateOperationsInput;

    @Field(() => UserRelationUpdateManyWithoutDmNestedInput, {nullable:true})
    UserRelations?: UserRelationUpdateManyWithoutDmNestedInput;

    @Field(() => UserGroupUpdateManyWithoutChannelDmNestedInput, {nullable:true})
    UserGroups?: UserGroupUpdateManyWithoutChannelDmNestedInput;
}

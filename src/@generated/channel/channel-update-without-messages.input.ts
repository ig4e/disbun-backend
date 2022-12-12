import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumChannelTypeFieldUpdateOperationsInput } from '../prisma/enum-channel-type-field-update-operations.input';
import { UserRelationUpdateManyWithoutDmNestedInput } from '../user-relation/user-relation-update-many-without-dm-nested.input';
import { UserGroupUpdateManyWithoutChannelNestedInput } from '../user-group/user-group-update-many-without-channel-nested.input';

@InputType()
export class ChannelUpdateWithoutMessagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumChannelTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumChannelTypeFieldUpdateOperationsInput;

    @Field(() => UserRelationUpdateManyWithoutDmNestedInput, {nullable:true})
    UserRelations?: UserRelationUpdateManyWithoutDmNestedInput;

    @Field(() => UserGroupUpdateManyWithoutChannelNestedInput, {nullable:true})
    UserGroups?: UserGroupUpdateManyWithoutChannelNestedInput;
}

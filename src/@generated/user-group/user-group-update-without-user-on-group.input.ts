import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ChannelDmUpdateOneRequiredWithoutUserGroupsNestedInput } from '../channel-dm/channel-dm-update-one-required-without-user-groups-nested.input';

@InputType()
export class UserGroupUpdateWithoutUserOnGroupInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ChannelDmUpdateOneRequiredWithoutUserGroupsNestedInput, {nullable:true})
    ChannelDm?: ChannelDmUpdateOneRequiredWithoutUserGroupsNestedInput;
}

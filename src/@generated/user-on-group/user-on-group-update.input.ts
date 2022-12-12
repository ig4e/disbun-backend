import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutGroupsNestedInput } from '../user/user-update-one-required-without-groups-nested.input';
import { UserGroupUpdateOneRequiredWithoutUsersNestedInput } from '../user-group/user-group-update-one-required-without-users-nested.input';

@InputType()
export class UserOnGroupUpdateInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    owner?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutGroupsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput;

    @Field(() => UserGroupUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    group?: UserGroupUpdateOneRequiredWithoutUsersNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserGroupUpdateOneRequiredWithoutUsersNestedInput } from '../user-group/user-group-update-one-required-without-users-nested.input';

@InputType()
export class UserOnGroupUpdateWithoutUserInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    owner?: BoolFieldUpdateOperationsInput;

    @Field(() => UserGroupUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    group?: UserGroupUpdateOneRequiredWithoutUsersNestedInput;
}

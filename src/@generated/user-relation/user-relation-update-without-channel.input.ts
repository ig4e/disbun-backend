import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutRelationsNestedInput } from '../user/user-update-one-required-without-relations-nested.input';
import { UserUpdateOneRequiredWithoutUserRelationsNestedInput } from '../user/user-update-one-required-without-user-relations-nested.input';
import { EnumRelationStatusFieldUpdateOperationsInput } from '../prisma/enum-relation-status-field-update-operations.input';

@InputType()
export class UserRelationUpdateWithoutChannelInput {

    @Field(() => UserUpdateOneRequiredWithoutRelationsNestedInput, {nullable:true})
    relatedUser?: UserUpdateOneRequiredWithoutRelationsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutUserRelationsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserRelationsNestedInput;

    @Field(() => EnumRelationStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumRelationStatusFieldUpdateOperationsInput;
}

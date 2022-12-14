import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutRelationsNestedInput } from '../user/user-update-one-required-without-relations-nested.input';
import { UserUpdateOneRequiredWithoutUserSideRelationsNestedInput } from '../user/user-update-one-required-without-user-side-relations-nested.input';
import { EnumRelationStatusFieldUpdateOperationsInput } from '../prisma/enum-relation-status-field-update-operations.input';

@InputType()
export class UserRelationUpdateWithoutChannelInput {

    @Field(() => UserUpdateOneRequiredWithoutRelationsNestedInput, {nullable:true})
    relatedUser?: UserUpdateOneRequiredWithoutRelationsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutUserSideRelationsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserSideRelationsNestedInput;

    @Field(() => EnumRelationStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumRelationStatusFieldUpdateOperationsInput;
}

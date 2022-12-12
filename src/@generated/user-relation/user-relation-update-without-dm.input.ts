import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRelationsNestedInput } from '../user/user-update-one-required-without-relations-nested.input';
import { UserUpdateOneRequiredWithoutUserRelationsNestedInput } from '../user/user-update-one-required-without-user-relations-nested.input';
import { EnumUserRelationTypeFieldUpdateOperationsInput } from '../prisma/enum-user-relation-type-field-update-operations.input';

@InputType()
export class UserRelationUpdateWithoutDmInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutRelationsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutRelationsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutUserRelationsNestedInput, {nullable:true})
    relationUser?: UserUpdateOneRequiredWithoutUserRelationsNestedInput;

    @Field(() => EnumUserRelationTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumUserRelationTypeFieldUpdateOperationsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutImageNestedInput } from '../user/user-update-one-required-without-image-nested.input';

@InputType()
export class UserImageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutImageNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutImageNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserGroupUpdateOneRequiredWithoutImageNestedInput } from '../user-group/user-group-update-one-required-without-image-nested.input';

@InputType()
export class GroupImageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserGroupUpdateOneRequiredWithoutImageNestedInput, {nullable:true})
    group?: UserGroupUpdateOneRequiredWithoutImageNestedInput;
}

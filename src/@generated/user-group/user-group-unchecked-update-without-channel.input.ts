import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GroupImageUncheckedUpdateOneWithoutGroupNestedInput } from '../group-image/group-image-unchecked-update-one-without-group-nested.input';
import { UserOnGroupUncheckedUpdateManyWithoutGroupNestedInput } from '../user-on-group/user-on-group-unchecked-update-many-without-group-nested.input';

@InputType()
export class UserGroupUncheckedUpdateWithoutChannelInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => GroupImageUncheckedUpdateOneWithoutGroupNestedInput, {nullable:true})
    image?: GroupImageUncheckedUpdateOneWithoutGroupNestedInput;

    @Field(() => UserOnGroupUncheckedUpdateManyWithoutGroupNestedInput, {nullable:true})
    users?: UserOnGroupUncheckedUpdateManyWithoutGroupNestedInput;
}

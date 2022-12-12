import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserOnGroupUncheckedUpdateManyWithoutGroupNestedInput } from '../user-on-group/user-on-group-unchecked-update-many-without-group-nested.input';

@InputType()
export class UserGroupUncheckedUpdateWithoutChannelInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserOnGroupUncheckedUpdateManyWithoutGroupNestedInput, {nullable:true})
    UserOnGroup?: UserOnGroupUncheckedUpdateManyWithoutGroupNestedInput;
}

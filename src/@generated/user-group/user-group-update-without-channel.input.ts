import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserOnGroupUpdateManyWithoutGroupNestedInput } from '../user-on-group/user-on-group-update-many-without-group-nested.input';

@InputType()
export class UserGroupUpdateWithoutChannelInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserOnGroupUpdateManyWithoutGroupNestedInput, {nullable:true})
    UserOnGroup?: UserOnGroupUpdateManyWithoutGroupNestedInput;
}

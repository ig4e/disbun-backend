import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserOnGroupUncheckedUpdateManyWithoutGroupNestedInput } from '../user-on-group/user-on-group-unchecked-update-many-without-group-nested.input';
import { GroupChannelUncheckedUpdateOneWithoutGroupNestedInput } from '../group-channel/group-channel-unchecked-update-one-without-group-nested.input';

@InputType()
export class UserGroupUncheckedUpdateWithoutImageInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => UserOnGroupUncheckedUpdateManyWithoutGroupNestedInput, {nullable:true})
    users?: UserOnGroupUncheckedUpdateManyWithoutGroupNestedInput;

    @Field(() => GroupChannelUncheckedUpdateOneWithoutGroupNestedInput, {nullable:true})
    channel?: GroupChannelUncheckedUpdateOneWithoutGroupNestedInput;
}

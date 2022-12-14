import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GroupImageUncheckedUpdateOneWithoutGroupNestedInput } from '../group-image/group-image-unchecked-update-one-without-group-nested.input';
import { GroupChannelUncheckedUpdateOneWithoutGroupNestedInput } from '../group-channel/group-channel-unchecked-update-one-without-group-nested.input';

@InputType()
export class UserGroupUncheckedUpdateWithoutUsersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => GroupImageUncheckedUpdateOneWithoutGroupNestedInput, {nullable:true})
    image?: GroupImageUncheckedUpdateOneWithoutGroupNestedInput;

    @Field(() => GroupChannelUncheckedUpdateOneWithoutGroupNestedInput, {nullable:true})
    channel?: GroupChannelUncheckedUpdateOneWithoutGroupNestedInput;
}

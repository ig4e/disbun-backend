import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserOnGroupUpdateManyWithoutGroupNestedInput } from '../user-on-group/user-on-group-update-many-without-group-nested.input';
import { GroupChannelUpdateOneWithoutGroupNestedInput } from '../group-channel/group-channel-update-one-without-group-nested.input';

@InputType()
export class UserGroupUpdateWithoutImageInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => UserOnGroupUpdateManyWithoutGroupNestedInput, {nullable:true})
    users?: UserOnGroupUpdateManyWithoutGroupNestedInput;

    @Field(() => GroupChannelUpdateOneWithoutGroupNestedInput, {nullable:true})
    groupChannel?: GroupChannelUpdateOneWithoutGroupNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserGroupUpdateOneRequiredWithoutGroupChannelNestedInput } from '../user-group/user-group-update-one-required-without-group-channel-nested.input';

@InputType()
export class GroupChannelUpdateWithoutMessagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserGroupUpdateOneRequiredWithoutGroupChannelNestedInput, {nullable:true})
    group?: UserGroupUpdateOneRequiredWithoutGroupChannelNestedInput;
}

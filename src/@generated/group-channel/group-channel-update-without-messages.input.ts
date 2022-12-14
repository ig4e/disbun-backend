import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserGroupUpdateOneRequiredWithoutChannelNestedInput } from '../user-group/user-group-update-one-required-without-channel-nested.input';

@InputType()
export class GroupChannelUpdateWithoutMessagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserGroupUpdateOneRequiredWithoutChannelNestedInput, {nullable:true})
    group?: UserGroupUpdateOneRequiredWithoutChannelNestedInput;
}

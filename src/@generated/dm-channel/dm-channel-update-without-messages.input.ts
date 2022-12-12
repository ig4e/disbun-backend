import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserRelationUpdateOneRequiredWithoutChannelNestedInput } from '../user-relation/user-relation-update-one-required-without-channel-nested.input';

@InputType()
export class DmChannelUpdateWithoutMessagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserRelationUpdateOneRequiredWithoutChannelNestedInput, {nullable:true})
    userRelation?: UserRelationUpdateOneRequiredWithoutChannelNestedInput;
}

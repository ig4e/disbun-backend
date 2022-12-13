import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumRelationStatusFieldUpdateOperationsInput } from '../prisma/enum-relation-status-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DmChannelUncheckedUpdateOneWithoutUserRelationNestedInput } from '../dm-channel/dm-channel-unchecked-update-one-without-user-relation-nested.input';

@InputType()
export class UserRelationUncheckedUpdateWithoutRelatedUserInput {

    @Field(() => EnumRelationStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumRelationStatusFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => DmChannelUncheckedUpdateOneWithoutUserRelationNestedInput, {nullable:true})
    channel?: DmChannelUncheckedUpdateOneWithoutUserRelationNestedInput;
}

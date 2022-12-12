import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumRelationStatusFieldUpdateOperationsInput } from '../prisma/enum-relation-status-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DmChannelUncheckedUpdateOneWithoutUserRelationNestedInput } from '../dm-channel/dm-channel-unchecked-update-one-without-user-relation-nested.input';

@InputType()
export class UserRelationUncheckedUpdateInput {

    @Field(() => EnumRelationStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumRelationStatusFieldUpdateOperationsInput;

    @HideField()
    relatedUserId?: StringFieldUpdateOperationsInput;

    @HideField()
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => DmChannelUncheckedUpdateOneWithoutUserRelationNestedInput, {nullable:true})
    channel?: DmChannelUncheckedUpdateOneWithoutUserRelationNestedInput;
}
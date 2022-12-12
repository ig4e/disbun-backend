import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class DmChannelUncheckedUpdateWithoutMessagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @HideField()
    userRelationRelatedUserId?: StringFieldUpdateOperationsInput;

    @HideField()
    userRelationUserId?: StringFieldUpdateOperationsInput;
}

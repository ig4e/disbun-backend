import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserOnGroupUncheckedUpdateInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    owner?: BoolFieldUpdateOperationsInput;

    @HideField()
    groupId?: StringFieldUpdateOperationsInput;

    @HideField()
    userId?: StringFieldUpdateOperationsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class UserOnGroupUpdateManyMutationInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    owner?: BoolFieldUpdateOperationsInput;
}

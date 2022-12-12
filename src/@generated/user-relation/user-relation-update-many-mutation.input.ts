import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumRelationStatusFieldUpdateOperationsInput } from '../prisma/enum-relation-status-field-update-operations.input';

@InputType()
export class UserRelationUpdateManyMutationInput {

    @Field(() => EnumRelationStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumRelationStatusFieldUpdateOperationsInput;
}

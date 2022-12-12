import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelationStatus } from './relation-status.enum';

@InputType()
export class EnumRelationStatusFieldUpdateOperationsInput {

    @Field(() => RelationStatus, {nullable:true})
    set?: keyof typeof RelationStatus;
}

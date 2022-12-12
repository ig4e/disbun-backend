import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumUserRelationTypeFieldUpdateOperationsInput } from '../prisma/enum-user-relation-type-field-update-operations.input';

@InputType()
export class UserRelationUncheckedUpdateWithoutRelationUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumUserRelationTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumUserRelationTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ChannelDmId?: StringFieldUpdateOperationsInput;
}

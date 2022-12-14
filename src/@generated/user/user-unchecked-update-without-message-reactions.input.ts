import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserImageUncheckedUpdateOneWithoutUserNestedInput } from '../user-image/user-image-unchecked-update-one-without-user-nested.input';
import { HideField } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumUserLocaleFieldUpdateOperationsInput } from '../prisma/enum-user-locale-field-update-operations.input';
import { UserOnGroupUncheckedUpdateManyWithoutUserNestedInput } from '../user-on-group/user-on-group-unchecked-update-many-without-user-nested.input';
import { UserRelationUncheckedUpdateManyWithoutUserNestedInput } from '../user-relation/user-relation-unchecked-update-many-without-user-nested.input';
import { UserRelationUncheckedUpdateManyWithoutRelatedUserNestedInput } from '../user-relation/user-relation-unchecked-update-many-without-related-user-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MessageUncheckedUpdateManyWithoutAuthorNestedInput } from '../message/message-unchecked-update-many-without-author-nested.input';
import { UserUpdatemessageReactionIDsInput } from './user-updatemessage-reaction-i-ds.input';

@InputType()
export class UserUncheckedUpdateWithoutMessageReactionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserImageUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    image?: UserImageUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    discriminator?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @HideField()
    password?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    verified?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    staff?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumUserLocaleFieldUpdateOperationsInput, {nullable:true})
    locale?: EnumUserLocaleFieldUpdateOperationsInput;

    @Field(() => UserOnGroupUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    groups?: UserOnGroupUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserRelationUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userSideRelations?: UserRelationUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserRelationUncheckedUpdateManyWithoutRelatedUserNestedInput, {nullable:true})
    relations?: UserRelationUncheckedUpdateManyWithoutRelatedUserNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MessageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => UserUpdatemessageReactionIDsInput, {nullable:true})
    messageReactionIDs?: UserUpdatemessageReactionIDsInput;
}

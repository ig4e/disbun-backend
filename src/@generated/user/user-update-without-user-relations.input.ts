import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserImageUpdateOneWithoutUserNestedInput } from '../user-image/user-image-update-one-without-user-nested.input';
import { HideField } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumUserLocaleFieldUpdateOperationsInput } from '../prisma/enum-user-locale-field-update-operations.input';
import { UserOnGroupUpdateManyWithoutUserNestedInput } from '../user-on-group/user-on-group-update-many-without-user-nested.input';
import { UserRelationUpdateManyWithoutRelatedUserNestedInput } from '../user-relation/user-relation-update-many-without-related-user-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MessageUpdateManyWithoutAuthorNestedInput } from '../message/message-update-many-without-author-nested.input';
import { MessageReactionUpdateManyWithoutUsersNestedInput } from '../message-reaction/message-reaction-update-many-without-users-nested.input';
import { UserUpdatemessageReactionIdInput } from './user-updatemessage-reaction-id.input';

@InputType()
export class UserUpdateWithoutUserRelationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserImageUpdateOneWithoutUserNestedInput, {nullable:true})
    image?: UserImageUpdateOneWithoutUserNestedInput;

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

    @Field(() => UserOnGroupUpdateManyWithoutUserNestedInput, {nullable:true})
    groups?: UserOnGroupUpdateManyWithoutUserNestedInput;

    @Field(() => UserRelationUpdateManyWithoutRelatedUserNestedInput, {nullable:true})
    relations?: UserRelationUpdateManyWithoutRelatedUserNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    Messages?: MessageUpdateManyWithoutAuthorNestedInput;

    @HideField()
    MessageReaction?: MessageReactionUpdateManyWithoutUsersNestedInput;

    @HideField()
    messageReactionId?: UserUpdatemessageReactionIdInput;
}
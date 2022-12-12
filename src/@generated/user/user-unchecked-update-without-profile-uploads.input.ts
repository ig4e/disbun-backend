import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumUserLocaleFieldUpdateOperationsInput } from '../prisma/enum-user-locale-field-update-operations.input';
import { UserRelationUncheckedUpdateManyWithoutUserNestedInput } from '../user-relation/user-relation-unchecked-update-many-without-user-nested.input';
import { UserOnGroupUncheckedUpdateManyWithoutUserNestedInput } from '../user-on-group/user-on-group-unchecked-update-many-without-user-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserRelationUncheckedUpdateManyWithoutRelationUserNestedInput } from '../user-relation/user-relation-unchecked-update-many-without-relation-user-nested.input';
import { MessageMentionUncheckedUpdateManyWithoutUsersNestedInput } from '../message-mention/message-mention-unchecked-update-many-without-users-nested.input';
import { MessageReactionUncheckedUpdateManyWithoutUsersNestedInput } from '../message-reaction/message-reaction-unchecked-update-many-without-users-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutProfileUploadsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    discriminator?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    verified?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    staff?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumUserLocaleFieldUpdateOperationsInput, {nullable:true})
    locale?: EnumUserLocaleFieldUpdateOperationsInput;

    @Field(() => UserRelationUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    relations?: UserRelationUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserOnGroupUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    groups?: UserOnGroupUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserRelationUncheckedUpdateManyWithoutRelationUserNestedInput, {nullable:true})
    UserRelations?: UserRelationUncheckedUpdateManyWithoutRelationUserNestedInput;

    @Field(() => MessageMentionUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    MessageMention?: MessageMentionUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => MessageReactionUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    MessageReaction?: MessageReactionUncheckedUpdateManyWithoutUsersNestedInput;
}

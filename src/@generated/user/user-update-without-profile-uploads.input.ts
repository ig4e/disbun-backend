import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumUserLocaleFieldUpdateOperationsInput } from '../prisma/enum-user-locale-field-update-operations.input';
import { UserRelationUpdateManyWithoutUserNestedInput } from '../user-relation/user-relation-update-many-without-user-nested.input';
import { UserOnGroupUpdateManyWithoutUserNestedInput } from '../user-on-group/user-on-group-update-many-without-user-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserRelationUpdateManyWithoutRelationUserNestedInput } from '../user-relation/user-relation-update-many-without-relation-user-nested.input';
import { MessageMentionUpdateManyWithoutUsersNestedInput } from '../message-mention/message-mention-update-many-without-users-nested.input';
import { MessageReactionUpdateManyWithoutUsersNestedInput } from '../message-reaction/message-reaction-update-many-without-users-nested.input';

@InputType()
export class UserUpdateWithoutProfileUploadsInput {

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

    @Field(() => UserRelationUpdateManyWithoutUserNestedInput, {nullable:true})
    relations?: UserRelationUpdateManyWithoutUserNestedInput;

    @Field(() => UserOnGroupUpdateManyWithoutUserNestedInput, {nullable:true})
    groups?: UserOnGroupUpdateManyWithoutUserNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserRelationUpdateManyWithoutRelationUserNestedInput, {nullable:true})
    UserRelations?: UserRelationUpdateManyWithoutRelationUserNestedInput;

    @Field(() => MessageMentionUpdateManyWithoutUsersNestedInput, {nullable:true})
    MessageMention?: MessageMentionUpdateManyWithoutUsersNestedInput;

    @Field(() => MessageReactionUpdateManyWithoutUsersNestedInput, {nullable:true})
    MessageReaction?: MessageReactionUpdateManyWithoutUsersNestedInput;
}

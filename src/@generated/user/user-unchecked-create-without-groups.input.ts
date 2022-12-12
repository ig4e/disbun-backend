import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserImageUncheckedCreateNestedOneWithoutUserInput } from '../user-image/user-image-unchecked-create-nested-one-without-user.input';
import { HideField } from '@nestjs/graphql';
import { UserLocale } from '../prisma/user-locale.enum';
import { UserRelationUncheckedCreateNestedManyWithoutRelatedUserInput } from '../user-relation/user-relation-unchecked-create-nested-many-without-related-user.input';
import { UserRelationUncheckedCreateNestedManyWithoutUserInput } from '../user-relation/user-relation-unchecked-create-nested-many-without-user.input';
import { MessageUncheckedCreateNestedManyWithoutAuthorInput } from '../message/message-unchecked-create-nested-many-without-author.input';
import { MessageReactionUncheckedCreateNestedManyWithoutUsersInput } from '../message-reaction/message-reaction-unchecked-create-nested-many-without-users.input';
import { UserCreatemessageReactionIdInput } from './user-createmessage-reaction-id.input';

@InputType()
export class UserUncheckedCreateWithoutGroupsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserImageUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    image?: UserImageUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    discriminator!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    password!: string;

    @Field(() => Boolean, {nullable:false})
    verified!: boolean;

    @Field(() => Boolean, {nullable:false})
    staff!: boolean;

    @Field(() => UserLocale, {nullable:true})
    locale?: keyof typeof UserLocale;

    @Field(() => UserRelationUncheckedCreateNestedManyWithoutRelatedUserInput, {nullable:true})
    relations?: UserRelationUncheckedCreateNestedManyWithoutRelatedUserInput;

    @Field(() => Date, {nullable:false})
    dateOfBirth!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @HideField()
    UserRelations?: UserRelationUncheckedCreateNestedManyWithoutUserInput;

    @HideField()
    Messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput;

    @HideField()
    MessageReaction?: MessageReactionUncheckedCreateNestedManyWithoutUsersInput;

    @HideField()
    messageReactionId?: UserCreatemessageReactionIdInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadCreateNestedManyWithoutUserInput } from '../user-profile-upload/user-profile-upload-create-nested-many-without-user.input';
import { UserLocale } from '../prisma/user-locale.enum';
import { UserRelationCreateNestedManyWithoutUserInput } from '../user-relation/user-relation-create-nested-many-without-user.input';
import { UserOnGroupCreateNestedManyWithoutUserInput } from '../user-on-group/user-on-group-create-nested-many-without-user.input';
import { UserRelationCreateNestedManyWithoutRelationUserInput } from '../user-relation/user-relation-create-nested-many-without-relation-user.input';
import { MessageReactionCreateNestedManyWithoutUsersInput } from '../message-reaction/message-reaction-create-nested-many-without-users.input';

@InputType()
export class UserCreateWithoutMessageMentionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserProfileUploadCreateNestedManyWithoutUserInput, {nullable:true})
    profileUploads?: UserProfileUploadCreateNestedManyWithoutUserInput;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    discriminator!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Boolean, {nullable:false})
    verified!: boolean;

    @Field(() => Boolean, {nullable:false})
    staff!: boolean;

    @Field(() => UserLocale, {nullable:true})
    locale?: keyof typeof UserLocale;

    @Field(() => UserRelationCreateNestedManyWithoutUserInput, {nullable:true})
    relations?: UserRelationCreateNestedManyWithoutUserInput;

    @Field(() => UserOnGroupCreateNestedManyWithoutUserInput, {nullable:true})
    groups?: UserOnGroupCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserRelationCreateNestedManyWithoutRelationUserInput, {nullable:true})
    UserRelations?: UserRelationCreateNestedManyWithoutRelationUserInput;

    @Field(() => MessageReactionCreateNestedManyWithoutUsersInput, {nullable:true})
    MessageReaction?: MessageReactionCreateNestedManyWithoutUsersInput;
}

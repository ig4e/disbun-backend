import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserLocale } from '../prisma/user-locale.enum';
import { UserOnGroupUncheckedCreateNestedManyWithoutUserInput } from '../user-on-group/user-on-group-unchecked-create-nested-many-without-user.input';
import { UserRelationUncheckedCreateNestedManyWithoutRelatedUserInput } from '../user-relation/user-relation-unchecked-create-nested-many-without-related-user.input';
import { UserRelationUncheckedCreateNestedManyWithoutUserInput } from '../user-relation/user-relation-unchecked-create-nested-many-without-user.input';
import { MessageUncheckedCreateNestedManyWithoutAuthorInput } from '../message/message-unchecked-create-nested-many-without-author.input';
import { MessageReactionUncheckedCreateNestedManyWithoutUsersInput } from '../message-reaction/message-reaction-unchecked-create-nested-many-without-users.input';
import { UserCreatemessageReactionIDsInput } from './user-createmessage-reaction-i-ds.input';

@InputType()
export class UserUncheckedCreateWithoutImageInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => UserOnGroupUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    groups?: UserOnGroupUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserRelationUncheckedCreateNestedManyWithoutRelatedUserInput, {nullable:true})
    relations?: UserRelationUncheckedCreateNestedManyWithoutRelatedUserInput;

    @Field(() => Date, {nullable:false})
    dateOfBirth!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserRelationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserRelations?: UserRelationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => MessageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => MessageReactionUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    MessageReactions?: MessageReactionUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => UserCreatemessageReactionIDsInput, {nullable:true})
    messageReactionIDs?: UserCreatemessageReactionIDsInput;
}

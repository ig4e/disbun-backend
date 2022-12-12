import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserLocale } from '../prisma/user-locale.enum';
import { UserRelationUncheckedCreateNestedManyWithoutUserInput } from '../user-relation/user-relation-unchecked-create-nested-many-without-user.input';
import { UserOnGroupUncheckedCreateNestedManyWithoutUserInput } from '../user-on-group/user-on-group-unchecked-create-nested-many-without-user.input';
import { UserRelationUncheckedCreateNestedManyWithoutRelationUserInput } from '../user-relation/user-relation-unchecked-create-nested-many-without-relation-user.input';
import { MessageMentionUncheckedCreateNestedManyWithoutUsersInput } from '../message-mention/message-mention-unchecked-create-nested-many-without-users.input';
import { MessageReactionUncheckedCreateNestedManyWithoutUsersInput } from '../message-reaction/message-reaction-unchecked-create-nested-many-without-users.input';

@InputType()
export class UserUncheckedCreateWithoutProfileUploadsInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => UserRelationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    relations?: UserRelationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserOnGroupUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    groups?: UserOnGroupUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserRelationUncheckedCreateNestedManyWithoutRelationUserInput, {nullable:true})
    UserRelations?: UserRelationUncheckedCreateNestedManyWithoutRelationUserInput;

    @Field(() => MessageMentionUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    MessageMention?: MessageMentionUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => MessageReactionUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    MessageReaction?: MessageReactionUncheckedCreateNestedManyWithoutUsersInput;
}

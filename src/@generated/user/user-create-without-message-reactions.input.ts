import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserImageCreateNestedOneWithoutUserInput } from '../user-image/user-image-create-nested-one-without-user.input';
import { HideField } from '@nestjs/graphql';
import { UserLocale } from '../prisma/user-locale.enum';
import { UserOnGroupCreateNestedManyWithoutUserInput } from '../user-on-group/user-on-group-create-nested-many-without-user.input';
import { UserRelationCreateNestedManyWithoutUserInput } from '../user-relation/user-relation-create-nested-many-without-user.input';
import { UserRelationCreateNestedManyWithoutRelatedUserInput } from '../user-relation/user-relation-create-nested-many-without-related-user.input';
import { MessageCreateNestedManyWithoutAuthorInput } from '../message/message-create-nested-many-without-author.input';
import { UserCreatemessageReactionIDsInput } from './user-createmessage-reaction-i-ds.input';

@InputType()
export class UserCreateWithoutMessageReactionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserImageCreateNestedOneWithoutUserInput, {nullable:true})
    image?: UserImageCreateNestedOneWithoutUserInput;

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

    @Field(() => UserOnGroupCreateNestedManyWithoutUserInput, {nullable:true})
    groups?: UserOnGroupCreateNestedManyWithoutUserInput;

    @Field(() => UserRelationCreateNestedManyWithoutUserInput, {nullable:true})
    userSideRelations?: UserRelationCreateNestedManyWithoutUserInput;

    @Field(() => UserRelationCreateNestedManyWithoutRelatedUserInput, {nullable:true})
    relations?: UserRelationCreateNestedManyWithoutRelatedUserInput;

    @Field(() => Date, {nullable:false})
    dateOfBirth!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MessageCreateNestedManyWithoutAuthorInput, {nullable:true})
    Messages?: MessageCreateNestedManyWithoutAuthorInput;

    @Field(() => UserCreatemessageReactionIDsInput, {nullable:true})
    messageReactionIDs?: UserCreatemessageReactionIDsInput;
}

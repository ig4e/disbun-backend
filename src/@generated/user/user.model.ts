import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserImage } from '../user-image/user-image.model';
import { HideField } from '@nestjs/graphql';
import { UserLocale } from '../prisma/user-locale.enum';
import { UserOnGroup } from '../user-on-group/user-on-group.model';
import { UserRelation } from '../user-relation/user-relation.model';
import { Message } from '../message/message.model';
import { MessageReaction } from '../message-reaction/message-reaction.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => UserImage, {nullable:true})
    image?: UserImage | null;

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

    @Field(() => UserLocale, {nullable:false,defaultValue:'EN_US'})
    locale!: keyof typeof UserLocale;

    @Field(() => [UserOnGroup], {nullable:true})
    groups?: Array<UserOnGroup>;

    @Field(() => [UserRelation], {nullable:true})
    relations?: Array<UserRelation>;

    @Field(() => Date, {nullable:false})
    dateOfBirth!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [UserRelation], {nullable:true})
    UserRelations?: Array<UserRelation>;

    @Field(() => [Message], {nullable:true})
    Messages?: Array<Message>;

    @Field(() => [MessageReaction], {nullable:true})
    MessageReactions?: Array<MessageReaction>;

    @Field(() => [String], {nullable:true})
    messageReactionIDs!: Array<string>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserImageRelationFilter } from '../user-image/user-image-relation-filter.input';
import { HideField } from '@nestjs/graphql';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumUserLocaleFilter } from '../prisma/enum-user-locale-filter.input';
import { UserOnGroupListRelationFilter } from '../user-on-group/user-on-group-list-relation-filter.input';
import { UserRelationListRelationFilter } from '../user-relation/user-relation-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { MessageReactionListRelationFilter } from '../message-reaction/message-reaction-list-relation-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserImageRelationFilter, {nullable:true})
    image?: UserImageRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    discriminator?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @HideField()
    password?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    verified?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    staff?: BoolFilter;

    @Field(() => EnumUserLocaleFilter, {nullable:true})
    locale?: EnumUserLocaleFilter;

    @Field(() => UserOnGroupListRelationFilter, {nullable:true})
    groups?: UserOnGroupListRelationFilter;

    @Field(() => UserRelationListRelationFilter, {nullable:true})
    userSideRelations?: UserRelationListRelationFilter;

    @Field(() => UserRelationListRelationFilter, {nullable:true})
    relations?: UserRelationListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dateOfBirth?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    Messages?: MessageListRelationFilter;

    @Field(() => MessageReactionListRelationFilter, {nullable:true})
    MessageReactions?: MessageReactionListRelationFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    messageReactionIDs?: StringNullableListFilter;
}

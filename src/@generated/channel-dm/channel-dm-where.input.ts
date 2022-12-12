import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumChannelTypeFilter } from '../prisma/enum-channel-type-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { UserRelationListRelationFilter } from '../user-relation/user-relation-list-relation-filter.input';
import { UserGroupListRelationFilter } from '../user-group/user-group-list-relation-filter.input';

@InputType()
export class ChannelDmWhereInput {

    @Field(() => [ChannelDmWhereInput], {nullable:true})
    AND?: Array<ChannelDmWhereInput>;

    @Field(() => [ChannelDmWhereInput], {nullable:true})
    OR?: Array<ChannelDmWhereInput>;

    @Field(() => [ChannelDmWhereInput], {nullable:true})
    NOT?: Array<ChannelDmWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumChannelTypeFilter, {nullable:true})
    type?: EnumChannelTypeFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;

    @Field(() => UserRelationListRelationFilter, {nullable:true})
    UserRelations?: UserRelationListRelationFilter;

    @Field(() => UserGroupListRelationFilter, {nullable:true})
    UserGroups?: UserGroupListRelationFilter;
}

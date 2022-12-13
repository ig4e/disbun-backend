import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { UserGroupRelationFilter } from '../user-group/user-group-relation-filter.input';

@InputType()
export class GroupChannelWhereInput {

    @Field(() => [GroupChannelWhereInput], {nullable:true})
    AND?: Array<GroupChannelWhereInput>;

    @Field(() => [GroupChannelWhereInput], {nullable:true})
    OR?: Array<GroupChannelWhereInput>;

    @Field(() => [GroupChannelWhereInput], {nullable:true})
    NOT?: Array<GroupChannelWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;

    @Field(() => UserGroupRelationFilter, {nullable:true})
    group?: UserGroupRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userGroupId?: StringFilter;
}

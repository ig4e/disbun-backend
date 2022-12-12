import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { GroupImageRelationFilter } from '../group-image/group-image-relation-filter.input';
import { UserOnGroupListRelationFilter } from '../user-on-group/user-on-group-list-relation-filter.input';
import { GroupChannelRelationFilter } from '../group-channel/group-channel-relation-filter.input';

@InputType()
export class UserGroupWhereInput {

    @Field(() => [UserGroupWhereInput], {nullable:true})
    AND?: Array<UserGroupWhereInput>;

    @Field(() => [UserGroupWhereInput], {nullable:true})
    OR?: Array<UserGroupWhereInput>;

    @Field(() => [UserGroupWhereInput], {nullable:true})
    NOT?: Array<UserGroupWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => GroupImageRelationFilter, {nullable:true})
    image?: GroupImageRelationFilter;

    @Field(() => UserOnGroupListRelationFilter, {nullable:true})
    users?: UserOnGroupListRelationFilter;

    @Field(() => GroupChannelRelationFilter, {nullable:true})
    groupChannel?: GroupChannelRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { EnumRelationStatusFilter } from '../prisma/enum-relation-status-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DmChannelRelationFilter } from '../dm-channel/dm-channel-relation-filter.input';

@InputType()
export class UserRelationWhereInput {

    @Field(() => [UserRelationWhereInput], {nullable:true})
    AND?: Array<UserRelationWhereInput>;

    @Field(() => [UserRelationWhereInput], {nullable:true})
    OR?: Array<UserRelationWhereInput>;

    @Field(() => [UserRelationWhereInput], {nullable:true})
    NOT?: Array<UserRelationWhereInput>;

    @Field(() => UserRelationFilter, {nullable:true})
    relatedUser?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => EnumRelationStatusFilter, {nullable:true})
    status?: EnumRelationStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    relatedUserId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DmChannelRelationFilter, {nullable:true})
    channel?: DmChannelRelationFilter;
}

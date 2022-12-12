import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserGroupRelationFilter } from '../user-group/user-group-relation-filter.input';

@InputType()
export class GroupImageWhereInput {

    @Field(() => [GroupImageWhereInput], {nullable:true})
    AND?: Array<GroupImageWhereInput>;

    @Field(() => [GroupImageWhereInput], {nullable:true})
    OR?: Array<GroupImageWhereInput>;

    @Field(() => [GroupImageWhereInput], {nullable:true})
    NOT?: Array<GroupImageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserGroupRelationFilter, {nullable:true})
    group?: UserGroupRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userGroupId?: StringFilter;
}

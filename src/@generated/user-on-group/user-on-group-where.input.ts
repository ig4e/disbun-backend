import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { UserGroupRelationFilter } from '../user-group/user-group-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserOnGroupWhereInput {

    @Field(() => [UserOnGroupWhereInput], {nullable:true})
    AND?: Array<UserOnGroupWhereInput>;

    @Field(() => [UserOnGroupWhereInput], {nullable:true})
    OR?: Array<UserOnGroupWhereInput>;

    @Field(() => [UserOnGroupWhereInput], {nullable:true})
    NOT?: Array<UserOnGroupWhereInput>;

    @Field(() => BoolFilter, {nullable:true})
    owner?: BoolFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => UserGroupRelationFilter, {nullable:true})
    group?: UserGroupRelationFilter;

    @HideField()
    groupId?: StringFilter;

    @HideField()
    userId?: StringFilter;
}

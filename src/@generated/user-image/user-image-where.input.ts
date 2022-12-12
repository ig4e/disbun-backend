import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class UserImageWhereInput {

    @Field(() => [UserImageWhereInput], {nullable:true})
    AND?: Array<UserImageWhereInput>;

    @Field(() => [UserImageWhereInput], {nullable:true})
    OR?: Array<UserImageWhereInput>;

    @Field(() => [UserImageWhereInput], {nullable:true})
    NOT?: Array<UserImageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}

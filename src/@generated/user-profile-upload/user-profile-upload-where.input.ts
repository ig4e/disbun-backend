import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumUserProfileUploadTypeFilter } from '../prisma/enum-user-profile-upload-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class UserProfileUploadWhereInput {

    @Field(() => [UserProfileUploadWhereInput], {nullable:true})
    AND?: Array<UserProfileUploadWhereInput>;

    @Field(() => [UserProfileUploadWhereInput], {nullable:true})
    OR?: Array<UserProfileUploadWhereInput>;

    @Field(() => [UserProfileUploadWhereInput], {nullable:true})
    NOT?: Array<UserProfileUploadWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumUserProfileUploadTypeFilter, {nullable:true})
    type?: EnumUserProfileUploadTypeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}

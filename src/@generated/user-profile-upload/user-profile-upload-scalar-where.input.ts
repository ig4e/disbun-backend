import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumUserProfileUploadTypeFilter } from '../prisma/enum-user-profile-upload-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserProfileUploadScalarWhereInput {

    @Field(() => [UserProfileUploadScalarWhereInput], {nullable:true})
    AND?: Array<UserProfileUploadScalarWhereInput>;

    @Field(() => [UserProfileUploadScalarWhereInput], {nullable:true})
    OR?: Array<UserProfileUploadScalarWhereInput>;

    @Field(() => [UserProfileUploadScalarWhereInput], {nullable:true})
    NOT?: Array<UserProfileUploadScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumUserProfileUploadTypeFilter, {nullable:true})
    type?: EnumUserProfileUploadTypeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}

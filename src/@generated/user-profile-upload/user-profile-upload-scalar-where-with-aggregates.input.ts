import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumUserProfileUploadTypeWithAggregatesFilter } from '../prisma/enum-user-profile-upload-type-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserProfileUploadScalarWhereWithAggregatesInput {

    @Field(() => [UserProfileUploadScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserProfileUploadScalarWhereWithAggregatesInput>;

    @Field(() => [UserProfileUploadScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserProfileUploadScalarWhereWithAggregatesInput>;

    @Field(() => [UserProfileUploadScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserProfileUploadScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumUserProfileUploadTypeWithAggregatesFilter, {nullable:true})
    type?: EnumUserProfileUploadTypeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}

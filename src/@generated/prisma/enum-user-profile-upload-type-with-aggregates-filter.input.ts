import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadType } from './user-profile-upload-type.enum';
import { NestedEnumUserProfileUploadTypeWithAggregatesFilter } from './nested-enum-user-profile-upload-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserProfileUploadTypeFilter } from './nested-enum-user-profile-upload-type-filter.input';

@InputType()
export class EnumUserProfileUploadTypeWithAggregatesFilter {

    @Field(() => UserProfileUploadType, {nullable:true})
    equals?: keyof typeof UserProfileUploadType;

    @Field(() => [UserProfileUploadType], {nullable:true})
    in?: Array<keyof typeof UserProfileUploadType>;

    @Field(() => [UserProfileUploadType], {nullable:true})
    notIn?: Array<keyof typeof UserProfileUploadType>;

    @Field(() => NestedEnumUserProfileUploadTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserProfileUploadTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserProfileUploadTypeFilter, {nullable:true})
    _min?: NestedEnumUserProfileUploadTypeFilter;

    @Field(() => NestedEnumUserProfileUploadTypeFilter, {nullable:true})
    _max?: NestedEnumUserProfileUploadTypeFilter;
}

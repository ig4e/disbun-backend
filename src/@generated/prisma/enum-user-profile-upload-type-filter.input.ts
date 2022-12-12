import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadType } from './user-profile-upload-type.enum';
import { NestedEnumUserProfileUploadTypeFilter } from './nested-enum-user-profile-upload-type-filter.input';

@InputType()
export class EnumUserProfileUploadTypeFilter {

    @Field(() => UserProfileUploadType, {nullable:true})
    equals?: keyof typeof UserProfileUploadType;

    @Field(() => [UserProfileUploadType], {nullable:true})
    in?: Array<keyof typeof UserProfileUploadType>;

    @Field(() => [UserProfileUploadType], {nullable:true})
    notIn?: Array<keyof typeof UserProfileUploadType>;

    @Field(() => NestedEnumUserProfileUploadTypeFilter, {nullable:true})
    not?: NestedEnumUserProfileUploadTypeFilter;
}

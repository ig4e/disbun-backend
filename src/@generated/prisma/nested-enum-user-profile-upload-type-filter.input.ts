import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadType } from './user-profile-upload-type.enum';

@InputType()
export class NestedEnumUserProfileUploadTypeFilter {

    @Field(() => UserProfileUploadType, {nullable:true})
    equals?: keyof typeof UserProfileUploadType;

    @Field(() => [UserProfileUploadType], {nullable:true})
    in?: Array<keyof typeof UserProfileUploadType>;

    @Field(() => [UserProfileUploadType], {nullable:true})
    notIn?: Array<keyof typeof UserProfileUploadType>;

    @Field(() => NestedEnumUserProfileUploadTypeFilter, {nullable:true})
    not?: NestedEnumUserProfileUploadTypeFilter;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUploadUpdateInput } from './user-profile-upload-update.input';
import { Type } from 'class-transformer';
import { UserProfileUploadWhereUniqueInput } from './user-profile-upload-where-unique.input';

@ArgsType()
export class UpdateOneUserProfileUploadArgs {

    @Field(() => UserProfileUploadUpdateInput, {nullable:false})
    @Type(() => UserProfileUploadUpdateInput)
    data!: UserProfileUploadUpdateInput;

    @Field(() => UserProfileUploadWhereUniqueInput, {nullable:false})
    @Type(() => UserProfileUploadWhereUniqueInput)
    where!: UserProfileUploadWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUploadWhereUniqueInput } from './user-profile-upload-where-unique.input';
import { Type } from 'class-transformer';
import { UserProfileUploadCreateInput } from './user-profile-upload-create.input';
import { UserProfileUploadUpdateInput } from './user-profile-upload-update.input';

@ArgsType()
export class UpsertOneUserProfileUploadArgs {

    @Field(() => UserProfileUploadWhereUniqueInput, {nullable:false})
    @Type(() => UserProfileUploadWhereUniqueInput)
    where!: UserProfileUploadWhereUniqueInput;

    @Field(() => UserProfileUploadCreateInput, {nullable:false})
    @Type(() => UserProfileUploadCreateInput)
    create!: UserProfileUploadCreateInput;

    @Field(() => UserProfileUploadUpdateInput, {nullable:false})
    @Type(() => UserProfileUploadUpdateInput)
    update!: UserProfileUploadUpdateInput;
}

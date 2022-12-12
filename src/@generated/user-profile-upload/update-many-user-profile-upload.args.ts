import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUploadUpdateManyMutationInput } from './user-profile-upload-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserProfileUploadWhereInput } from './user-profile-upload-where.input';

@ArgsType()
export class UpdateManyUserProfileUploadArgs {

    @Field(() => UserProfileUploadUpdateManyMutationInput, {nullable:false})
    @Type(() => UserProfileUploadUpdateManyMutationInput)
    data!: UserProfileUploadUpdateManyMutationInput;

    @Field(() => UserProfileUploadWhereInput, {nullable:true})
    @Type(() => UserProfileUploadWhereInput)
    where?: UserProfileUploadWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUploadCreateInput } from './user-profile-upload-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserProfileUploadArgs {

    @Field(() => UserProfileUploadCreateInput, {nullable:false})
    @Type(() => UserProfileUploadCreateInput)
    data!: UserProfileUploadCreateInput;
}

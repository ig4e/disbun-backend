import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUploadCreateManyInput } from './user-profile-upload-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserProfileUploadArgs {

    @Field(() => [UserProfileUploadCreateManyInput], {nullable:false})
    @Type(() => UserProfileUploadCreateManyInput)
    data!: Array<UserProfileUploadCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

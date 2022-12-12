import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUploadWhereInput } from './user-profile-upload-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserProfileUploadArgs {

    @Field(() => UserProfileUploadWhereInput, {nullable:true})
    @Type(() => UserProfileUploadWhereInput)
    where?: UserProfileUploadWhereInput;
}

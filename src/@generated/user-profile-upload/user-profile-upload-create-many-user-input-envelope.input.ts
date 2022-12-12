import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadCreateManyUserInput } from './user-profile-upload-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserProfileUploadCreateManyUserInputEnvelope {

    @Field(() => [UserProfileUploadCreateManyUserInput], {nullable:false})
    @Type(() => UserProfileUploadCreateManyUserInput)
    data!: Array<UserProfileUploadCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

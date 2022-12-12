import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUploadWhereUniqueInput } from './user-profile-upload-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserProfileUploadArgs {

    @Field(() => UserProfileUploadWhereUniqueInput, {nullable:false})
    @Type(() => UserProfileUploadWhereUniqueInput)
    where!: UserProfileUploadWhereUniqueInput;
}

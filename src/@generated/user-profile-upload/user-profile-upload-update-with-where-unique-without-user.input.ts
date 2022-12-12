import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadWhereUniqueInput } from './user-profile-upload-where-unique.input';
import { Type } from 'class-transformer';
import { UserProfileUploadUpdateWithoutUserInput } from './user-profile-upload-update-without-user.input';

@InputType()
export class UserProfileUploadUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserProfileUploadWhereUniqueInput, {nullable:false})
    @Type(() => UserProfileUploadWhereUniqueInput)
    where!: UserProfileUploadWhereUniqueInput;

    @Field(() => UserProfileUploadUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserProfileUploadUpdateWithoutUserInput)
    data!: UserProfileUploadUpdateWithoutUserInput;
}

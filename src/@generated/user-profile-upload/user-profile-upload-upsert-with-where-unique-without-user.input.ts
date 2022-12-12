import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadWhereUniqueInput } from './user-profile-upload-where-unique.input';
import { Type } from 'class-transformer';
import { UserProfileUploadUpdateWithoutUserInput } from './user-profile-upload-update-without-user.input';
import { UserProfileUploadCreateWithoutUserInput } from './user-profile-upload-create-without-user.input';

@InputType()
export class UserProfileUploadUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserProfileUploadWhereUniqueInput, {nullable:false})
    @Type(() => UserProfileUploadWhereUniqueInput)
    where!: UserProfileUploadWhereUniqueInput;

    @Field(() => UserProfileUploadUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserProfileUploadUpdateWithoutUserInput)
    update!: UserProfileUploadUpdateWithoutUserInput;

    @Field(() => UserProfileUploadCreateWithoutUserInput, {nullable:false})
    @Type(() => UserProfileUploadCreateWithoutUserInput)
    create!: UserProfileUploadCreateWithoutUserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadWhereUniqueInput } from './user-profile-upload-where-unique.input';
import { Type } from 'class-transformer';
import { UserProfileUploadCreateWithoutUserInput } from './user-profile-upload-create-without-user.input';

@InputType()
export class UserProfileUploadCreateOrConnectWithoutUserInput {

    @Field(() => UserProfileUploadWhereUniqueInput, {nullable:false})
    @Type(() => UserProfileUploadWhereUniqueInput)
    where!: UserProfileUploadWhereUniqueInput;

    @Field(() => UserProfileUploadCreateWithoutUserInput, {nullable:false})
    @Type(() => UserProfileUploadCreateWithoutUserInput)
    create!: UserProfileUploadCreateWithoutUserInput;
}

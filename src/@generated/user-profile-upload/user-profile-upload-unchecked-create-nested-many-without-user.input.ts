import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadCreateWithoutUserInput } from './user-profile-upload-create-without-user.input';
import { Type } from 'class-transformer';
import { UserProfileUploadCreateOrConnectWithoutUserInput } from './user-profile-upload-create-or-connect-without-user.input';
import { UserProfileUploadCreateManyUserInputEnvelope } from './user-profile-upload-create-many-user-input-envelope.input';
import { UserProfileUploadWhereUniqueInput } from './user-profile-upload-where-unique.input';

@InputType()
export class UserProfileUploadUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserProfileUploadCreateWithoutUserInput], {nullable:true})
    @Type(() => UserProfileUploadCreateWithoutUserInput)
    create?: Array<UserProfileUploadCreateWithoutUserInput>;

    @Field(() => [UserProfileUploadCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserProfileUploadCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserProfileUploadCreateOrConnectWithoutUserInput>;

    @Field(() => UserProfileUploadCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserProfileUploadCreateManyUserInputEnvelope)
    createMany?: UserProfileUploadCreateManyUserInputEnvelope;

    @Field(() => [UserProfileUploadWhereUniqueInput], {nullable:true})
    @Type(() => UserProfileUploadWhereUniqueInput)
    connect?: Array<UserProfileUploadWhereUniqueInput>;
}

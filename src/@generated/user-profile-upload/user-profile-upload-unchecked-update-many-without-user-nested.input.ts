import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadCreateWithoutUserInput } from './user-profile-upload-create-without-user.input';
import { Type } from 'class-transformer';
import { UserProfileUploadCreateOrConnectWithoutUserInput } from './user-profile-upload-create-or-connect-without-user.input';
import { UserProfileUploadUpsertWithWhereUniqueWithoutUserInput } from './user-profile-upload-upsert-with-where-unique-without-user.input';
import { UserProfileUploadCreateManyUserInputEnvelope } from './user-profile-upload-create-many-user-input-envelope.input';
import { UserProfileUploadWhereUniqueInput } from './user-profile-upload-where-unique.input';
import { UserProfileUploadUpdateWithWhereUniqueWithoutUserInput } from './user-profile-upload-update-with-where-unique-without-user.input';
import { UserProfileUploadUpdateManyWithWhereWithoutUserInput } from './user-profile-upload-update-many-with-where-without-user.input';
import { UserProfileUploadScalarWhereInput } from './user-profile-upload-scalar-where.input';

@InputType()
export class UserProfileUploadUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserProfileUploadCreateWithoutUserInput], {nullable:true})
    @Type(() => UserProfileUploadCreateWithoutUserInput)
    create?: Array<UserProfileUploadCreateWithoutUserInput>;

    @Field(() => [UserProfileUploadCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserProfileUploadCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserProfileUploadCreateOrConnectWithoutUserInput>;

    @Field(() => [UserProfileUploadUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserProfileUploadUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserProfileUploadUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserProfileUploadCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserProfileUploadCreateManyUserInputEnvelope)
    createMany?: UserProfileUploadCreateManyUserInputEnvelope;

    @Field(() => [UserProfileUploadWhereUniqueInput], {nullable:true})
    @Type(() => UserProfileUploadWhereUniqueInput)
    set?: Array<UserProfileUploadWhereUniqueInput>;

    @Field(() => [UserProfileUploadWhereUniqueInput], {nullable:true})
    @Type(() => UserProfileUploadWhereUniqueInput)
    disconnect?: Array<UserProfileUploadWhereUniqueInput>;

    @Field(() => [UserProfileUploadWhereUniqueInput], {nullable:true})
    @Type(() => UserProfileUploadWhereUniqueInput)
    delete?: Array<UserProfileUploadWhereUniqueInput>;

    @Field(() => [UserProfileUploadWhereUniqueInput], {nullable:true})
    @Type(() => UserProfileUploadWhereUniqueInput)
    connect?: Array<UserProfileUploadWhereUniqueInput>;

    @Field(() => [UserProfileUploadUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserProfileUploadUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserProfileUploadUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserProfileUploadUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserProfileUploadUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserProfileUploadUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserProfileUploadScalarWhereInput], {nullable:true})
    @Type(() => UserProfileUploadScalarWhereInput)
    deleteMany?: Array<UserProfileUploadScalarWhereInput>;
}

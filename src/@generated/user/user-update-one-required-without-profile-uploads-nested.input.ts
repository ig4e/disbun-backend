import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProfileUploadsInput } from './user-create-without-profile-uploads.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProfileUploadsInput } from './user-create-or-connect-without-profile-uploads.input';
import { UserUpsertWithoutProfileUploadsInput } from './user-upsert-without-profile-uploads.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutProfileUploadsInput } from './user-update-without-profile-uploads.input';

@InputType()
export class UserUpdateOneRequiredWithoutProfileUploadsNestedInput {

    @Field(() => UserCreateWithoutProfileUploadsInput, {nullable:true})
    @Type(() => UserCreateWithoutProfileUploadsInput)
    create?: UserCreateWithoutProfileUploadsInput;

    @Field(() => UserCreateOrConnectWithoutProfileUploadsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProfileUploadsInput)
    connectOrCreate?: UserCreateOrConnectWithoutProfileUploadsInput;

    @Field(() => UserUpsertWithoutProfileUploadsInput, {nullable:true})
    @Type(() => UserUpsertWithoutProfileUploadsInput)
    upsert?: UserUpsertWithoutProfileUploadsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutProfileUploadsInput, {nullable:true})
    @Type(() => UserUpdateWithoutProfileUploadsInput)
    update?: UserUpdateWithoutProfileUploadsInput;
}

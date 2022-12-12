import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProfileUploadsInput } from './user-update-without-profile-uploads.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProfileUploadsInput } from './user-create-without-profile-uploads.input';

@InputType()
export class UserUpsertWithoutProfileUploadsInput {

    @Field(() => UserUpdateWithoutProfileUploadsInput, {nullable:false})
    @Type(() => UserUpdateWithoutProfileUploadsInput)
    update!: UserUpdateWithoutProfileUploadsInput;

    @Field(() => UserCreateWithoutProfileUploadsInput, {nullable:false})
    @Type(() => UserCreateWithoutProfileUploadsInput)
    create!: UserCreateWithoutProfileUploadsInput;
}

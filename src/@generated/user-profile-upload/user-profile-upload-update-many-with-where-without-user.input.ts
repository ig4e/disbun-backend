import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadScalarWhereInput } from './user-profile-upload-scalar-where.input';
import { Type } from 'class-transformer';
import { UserProfileUploadUpdateManyMutationInput } from './user-profile-upload-update-many-mutation.input';

@InputType()
export class UserProfileUploadUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserProfileUploadScalarWhereInput, {nullable:false})
    @Type(() => UserProfileUploadScalarWhereInput)
    where!: UserProfileUploadScalarWhereInput;

    @Field(() => UserProfileUploadUpdateManyMutationInput, {nullable:false})
    @Type(() => UserProfileUploadUpdateManyMutationInput)
    data!: UserProfileUploadUpdateManyMutationInput;
}

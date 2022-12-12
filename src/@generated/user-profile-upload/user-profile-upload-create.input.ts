import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadType } from '../prisma/user-profile-upload-type.enum';
import { UserCreateNestedOneWithoutProfileUploadsInput } from '../user/user-create-nested-one-without-profile-uploads.input';

@InputType()
export class UserProfileUploadCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserProfileUploadType, {nullable:true})
    type?: keyof typeof UserProfileUploadType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutProfileUploadsInput, {nullable:false})
    User!: UserCreateNestedOneWithoutProfileUploadsInput;
}

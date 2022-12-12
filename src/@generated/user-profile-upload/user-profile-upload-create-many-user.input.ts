import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadType } from '../prisma/user-profile-upload-type.enum';

@InputType()
export class UserProfileUploadCreateManyUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserProfileUploadType, {nullable:true})
    type?: keyof typeof UserProfileUploadType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

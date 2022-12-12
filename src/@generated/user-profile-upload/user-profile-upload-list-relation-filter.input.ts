import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadWhereInput } from './user-profile-upload-where.input';

@InputType()
export class UserProfileUploadListRelationFilter {

    @Field(() => UserProfileUploadWhereInput, {nullable:true})
    every?: UserProfileUploadWhereInput;

    @Field(() => UserProfileUploadWhereInput, {nullable:true})
    some?: UserProfileUploadWhereInput;

    @Field(() => UserProfileUploadWhereInput, {nullable:true})
    none?: UserProfileUploadWhereInput;
}

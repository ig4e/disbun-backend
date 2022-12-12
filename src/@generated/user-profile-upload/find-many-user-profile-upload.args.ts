import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUploadWhereInput } from './user-profile-upload-where.input';
import { Type } from 'class-transformer';
import { UserProfileUploadOrderByWithRelationInput } from './user-profile-upload-order-by-with-relation.input';
import { UserProfileUploadWhereUniqueInput } from './user-profile-upload-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserProfileUploadScalarFieldEnum } from './user-profile-upload-scalar-field.enum';

@ArgsType()
export class FindManyUserProfileUploadArgs {

    @Field(() => UserProfileUploadWhereInput, {nullable:true})
    @Type(() => UserProfileUploadWhereInput)
    where?: UserProfileUploadWhereInput;

    @Field(() => [UserProfileUploadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserProfileUploadOrderByWithRelationInput>;

    @Field(() => UserProfileUploadWhereUniqueInput, {nullable:true})
    cursor?: UserProfileUploadWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserProfileUploadScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserProfileUploadScalarFieldEnum>;
}

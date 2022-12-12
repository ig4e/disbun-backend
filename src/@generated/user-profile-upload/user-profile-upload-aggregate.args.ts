import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUploadWhereInput } from './user-profile-upload-where.input';
import { Type } from 'class-transformer';
import { UserProfileUploadOrderByWithRelationInput } from './user-profile-upload-order-by-with-relation.input';
import { UserProfileUploadWhereUniqueInput } from './user-profile-upload-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserProfileUploadCountAggregateInput } from './user-profile-upload-count-aggregate.input';
import { UserProfileUploadMinAggregateInput } from './user-profile-upload-min-aggregate.input';
import { UserProfileUploadMaxAggregateInput } from './user-profile-upload-max-aggregate.input';

@ArgsType()
export class UserProfileUploadAggregateArgs {

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

    @Field(() => UserProfileUploadCountAggregateInput, {nullable:true})
    _count?: UserProfileUploadCountAggregateInput;

    @Field(() => UserProfileUploadMinAggregateInput, {nullable:true})
    _min?: UserProfileUploadMinAggregateInput;

    @Field(() => UserProfileUploadMaxAggregateInput, {nullable:true})
    _max?: UserProfileUploadMaxAggregateInput;
}

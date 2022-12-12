import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserProfileUploadType } from '../prisma/user-profile-upload-type.enum';
import { UserProfileUploadCountAggregate } from './user-profile-upload-count-aggregate.output';
import { UserProfileUploadMinAggregate } from './user-profile-upload-min-aggregate.output';
import { UserProfileUploadMaxAggregate } from './user-profile-upload-max-aggregate.output';

@ObjectType()
export class UserProfileUploadGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => UserProfileUploadType, {nullable:false})
    type!: keyof typeof UserProfileUploadType;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => UserProfileUploadCountAggregate, {nullable:true})
    _count?: UserProfileUploadCountAggregate;

    @Field(() => UserProfileUploadMinAggregate, {nullable:true})
    _min?: UserProfileUploadMinAggregate;

    @Field(() => UserProfileUploadMaxAggregate, {nullable:true})
    _max?: UserProfileUploadMaxAggregate;
}

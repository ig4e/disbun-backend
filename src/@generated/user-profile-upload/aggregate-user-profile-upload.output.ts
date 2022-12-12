import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserProfileUploadCountAggregate } from './user-profile-upload-count-aggregate.output';
import { UserProfileUploadMinAggregate } from './user-profile-upload-min-aggregate.output';
import { UserProfileUploadMaxAggregate } from './user-profile-upload-max-aggregate.output';

@ObjectType()
export class AggregateUserProfileUpload {

    @Field(() => UserProfileUploadCountAggregate, {nullable:true})
    _count?: UserProfileUploadCountAggregate;

    @Field(() => UserProfileUploadMinAggregate, {nullable:true})
    _min?: UserProfileUploadMinAggregate;

    @Field(() => UserProfileUploadMaxAggregate, {nullable:true})
    _max?: UserProfileUploadMaxAggregate;
}

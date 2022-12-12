import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserProfileUploadType } from '../prisma/user-profile-upload-type.enum';

@ObjectType()
export class UserProfileUploadMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserProfileUploadType, {nullable:true})
    type?: keyof typeof UserProfileUploadType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserProfileUploadType } from '../prisma/user-profile-upload-type.enum';
import { User } from '../user/user.model';

@ObjectType()
export class UserProfileUpload {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => UserProfileUploadType, {nullable:false,defaultValue:'AVATAR'})
    type!: keyof typeof UserProfileUploadType;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => User, {nullable:false})
    User?: User;

    @Field(() => String, {nullable:false})
    userId!: string;
}

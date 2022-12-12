import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProfileUploadsInput } from './user-create-without-profile-uploads.input';

@InputType()
export class UserCreateOrConnectWithoutProfileUploadsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutProfileUploadsInput, {nullable:false})
    @Type(() => UserCreateWithoutProfileUploadsInput)
    create!: UserCreateWithoutProfileUploadsInput;
}

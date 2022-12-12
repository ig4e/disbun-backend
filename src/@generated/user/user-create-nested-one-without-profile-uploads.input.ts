import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProfileUploadsInput } from './user-create-without-profile-uploads.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProfileUploadsInput } from './user-create-or-connect-without-profile-uploads.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProfileUploadsInput {

    @Field(() => UserCreateWithoutProfileUploadsInput, {nullable:true})
    @Type(() => UserCreateWithoutProfileUploadsInput)
    create?: UserCreateWithoutProfileUploadsInput;

    @Field(() => UserCreateOrConnectWithoutProfileUploadsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProfileUploadsInput)
    connectOrCreate?: UserCreateOrConnectWithoutProfileUploadsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}

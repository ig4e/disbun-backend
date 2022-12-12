import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutImageInput } from './user-group-create-without-image.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutImageInput } from './user-group-create-or-connect-without-image.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';

@InputType()
export class UserGroupCreateNestedOneWithoutImageInput {

    @Field(() => UserGroupCreateWithoutImageInput, {nullable:true})
    @Type(() => UserGroupCreateWithoutImageInput)
    create?: UserGroupCreateWithoutImageInput;

    @Field(() => UserGroupCreateOrConnectWithoutImageInput, {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutImageInput)
    connectOrCreate?: UserGroupCreateOrConnectWithoutImageInput;

    @Field(() => UserGroupWhereUniqueInput, {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    connect?: UserGroupWhereUniqueInput;
}

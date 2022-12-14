import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutChannelInput } from './user-group-create-without-channel.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutChannelInput } from './user-group-create-or-connect-without-channel.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';

@InputType()
export class UserGroupCreateNestedOneWithoutChannelInput {

    @Field(() => UserGroupCreateWithoutChannelInput, {nullable:true})
    @Type(() => UserGroupCreateWithoutChannelInput)
    create?: UserGroupCreateWithoutChannelInput;

    @Field(() => UserGroupCreateOrConnectWithoutChannelInput, {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutChannelInput)
    connectOrCreate?: UserGroupCreateOrConnectWithoutChannelInput;

    @Field(() => UserGroupWhereUniqueInput, {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    connect?: UserGroupWhereUniqueInput;
}

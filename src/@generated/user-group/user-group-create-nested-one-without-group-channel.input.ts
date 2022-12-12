import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutGroupChannelInput } from './user-group-create-without-group-channel.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutGroupChannelInput } from './user-group-create-or-connect-without-group-channel.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';

@InputType()
export class UserGroupCreateNestedOneWithoutGroupChannelInput {

    @Field(() => UserGroupCreateWithoutGroupChannelInput, {nullable:true})
    @Type(() => UserGroupCreateWithoutGroupChannelInput)
    create?: UserGroupCreateWithoutGroupChannelInput;

    @Field(() => UserGroupCreateOrConnectWithoutGroupChannelInput, {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutGroupChannelInput)
    connectOrCreate?: UserGroupCreateOrConnectWithoutGroupChannelInput;

    @Field(() => UserGroupWhereUniqueInput, {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    connect?: UserGroupWhereUniqueInput;
}

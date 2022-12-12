import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutGroupChannelInput } from './user-group-create-without-group-channel.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutGroupChannelInput } from './user-group-create-or-connect-without-group-channel.input';
import { UserGroupUpsertWithoutGroupChannelInput } from './user-group-upsert-without-group-channel.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { UserGroupUpdateWithoutGroupChannelInput } from './user-group-update-without-group-channel.input';

@InputType()
export class UserGroupUpdateOneRequiredWithoutGroupChannelNestedInput {

    @Field(() => UserGroupCreateWithoutGroupChannelInput, {nullable:true})
    @Type(() => UserGroupCreateWithoutGroupChannelInput)
    create?: UserGroupCreateWithoutGroupChannelInput;

    @Field(() => UserGroupCreateOrConnectWithoutGroupChannelInput, {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutGroupChannelInput)
    connectOrCreate?: UserGroupCreateOrConnectWithoutGroupChannelInput;

    @Field(() => UserGroupUpsertWithoutGroupChannelInput, {nullable:true})
    @Type(() => UserGroupUpsertWithoutGroupChannelInput)
    upsert?: UserGroupUpsertWithoutGroupChannelInput;

    @Field(() => UserGroupWhereUniqueInput, {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    connect?: UserGroupWhereUniqueInput;

    @Field(() => UserGroupUpdateWithoutGroupChannelInput, {nullable:true})
    @Type(() => UserGroupUpdateWithoutGroupChannelInput)
    update?: UserGroupUpdateWithoutGroupChannelInput;
}

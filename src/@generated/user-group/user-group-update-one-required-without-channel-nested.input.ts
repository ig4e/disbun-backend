import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutChannelInput } from './user-group-create-without-channel.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutChannelInput } from './user-group-create-or-connect-without-channel.input';
import { UserGroupUpsertWithoutChannelInput } from './user-group-upsert-without-channel.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { UserGroupUpdateWithoutChannelInput } from './user-group-update-without-channel.input';

@InputType()
export class UserGroupUpdateOneRequiredWithoutChannelNestedInput {

    @Field(() => UserGroupCreateWithoutChannelInput, {nullable:true})
    @Type(() => UserGroupCreateWithoutChannelInput)
    create?: UserGroupCreateWithoutChannelInput;

    @Field(() => UserGroupCreateOrConnectWithoutChannelInput, {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutChannelInput)
    connectOrCreate?: UserGroupCreateOrConnectWithoutChannelInput;

    @Field(() => UserGroupUpsertWithoutChannelInput, {nullable:true})
    @Type(() => UserGroupUpsertWithoutChannelInput)
    upsert?: UserGroupUpsertWithoutChannelInput;

    @Field(() => UserGroupWhereUniqueInput, {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    connect?: UserGroupWhereUniqueInput;

    @Field(() => UserGroupUpdateWithoutChannelInput, {nullable:true})
    @Type(() => UserGroupUpdateWithoutChannelInput)
    update?: UserGroupUpdateWithoutChannelInput;
}

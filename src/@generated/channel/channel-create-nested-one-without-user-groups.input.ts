import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutUserGroupsInput } from './channel-create-without-user-groups.input';
import { Type } from 'class-transformer';
import { ChannelCreateOrConnectWithoutUserGroupsInput } from './channel-create-or-connect-without-user-groups.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';

@InputType()
export class ChannelCreateNestedOneWithoutUserGroupsInput {

    @Field(() => ChannelCreateWithoutUserGroupsInput, {nullable:true})
    @Type(() => ChannelCreateWithoutUserGroupsInput)
    create?: ChannelCreateWithoutUserGroupsInput;

    @Field(() => ChannelCreateOrConnectWithoutUserGroupsInput, {nullable:true})
    @Type(() => ChannelCreateOrConnectWithoutUserGroupsInput)
    connectOrCreate?: ChannelCreateOrConnectWithoutUserGroupsInput;

    @Field(() => ChannelWhereUniqueInput, {nullable:true})
    @Type(() => ChannelWhereUniqueInput)
    connect?: ChannelWhereUniqueInput;
}

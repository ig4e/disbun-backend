import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelDmCreateWithoutUserGroupsInput } from './channel-dm-create-without-user-groups.input';
import { Type } from 'class-transformer';
import { ChannelDmCreateOrConnectWithoutUserGroupsInput } from './channel-dm-create-or-connect-without-user-groups.input';
import { ChannelDmWhereUniqueInput } from './channel-dm-where-unique.input';

@InputType()
export class ChannelDmCreateNestedOneWithoutUserGroupsInput {

    @Field(() => ChannelDmCreateWithoutUserGroupsInput, {nullable:true})
    @Type(() => ChannelDmCreateWithoutUserGroupsInput)
    create?: ChannelDmCreateWithoutUserGroupsInput;

    @Field(() => ChannelDmCreateOrConnectWithoutUserGroupsInput, {nullable:true})
    @Type(() => ChannelDmCreateOrConnectWithoutUserGroupsInput)
    connectOrCreate?: ChannelDmCreateOrConnectWithoutUserGroupsInput;

    @Field(() => ChannelDmWhereUniqueInput, {nullable:true})
    @Type(() => ChannelDmWhereUniqueInput)
    connect?: ChannelDmWhereUniqueInput;
}

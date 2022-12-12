import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutUserGroupsInput } from './channel-create-without-user-groups.input';
import { Type } from 'class-transformer';
import { ChannelCreateOrConnectWithoutUserGroupsInput } from './channel-create-or-connect-without-user-groups.input';
import { ChannelUpsertWithoutUserGroupsInput } from './channel-upsert-without-user-groups.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelUpdateWithoutUserGroupsInput } from './channel-update-without-user-groups.input';

@InputType()
export class ChannelUpdateOneRequiredWithoutUserGroupsNestedInput {

    @Field(() => ChannelCreateWithoutUserGroupsInput, {nullable:true})
    @Type(() => ChannelCreateWithoutUserGroupsInput)
    create?: ChannelCreateWithoutUserGroupsInput;

    @Field(() => ChannelCreateOrConnectWithoutUserGroupsInput, {nullable:true})
    @Type(() => ChannelCreateOrConnectWithoutUserGroupsInput)
    connectOrCreate?: ChannelCreateOrConnectWithoutUserGroupsInput;

    @Field(() => ChannelUpsertWithoutUserGroupsInput, {nullable:true})
    @Type(() => ChannelUpsertWithoutUserGroupsInput)
    upsert?: ChannelUpsertWithoutUserGroupsInput;

    @Field(() => ChannelWhereUniqueInput, {nullable:true})
    @Type(() => ChannelWhereUniqueInput)
    connect?: ChannelWhereUniqueInput;

    @Field(() => ChannelUpdateWithoutUserGroupsInput, {nullable:true})
    @Type(() => ChannelUpdateWithoutUserGroupsInput)
    update?: ChannelUpdateWithoutUserGroupsInput;
}

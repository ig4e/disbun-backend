import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelDmCreateWithoutUserGroupsInput } from './channel-dm-create-without-user-groups.input';
import { Type } from 'class-transformer';
import { ChannelDmCreateOrConnectWithoutUserGroupsInput } from './channel-dm-create-or-connect-without-user-groups.input';
import { ChannelDmUpsertWithoutUserGroupsInput } from './channel-dm-upsert-without-user-groups.input';
import { ChannelDmWhereUniqueInput } from './channel-dm-where-unique.input';
import { ChannelDmUpdateWithoutUserGroupsInput } from './channel-dm-update-without-user-groups.input';

@InputType()
export class ChannelDmUpdateOneRequiredWithoutUserGroupsNestedInput {

    @Field(() => ChannelDmCreateWithoutUserGroupsInput, {nullable:true})
    @Type(() => ChannelDmCreateWithoutUserGroupsInput)
    create?: ChannelDmCreateWithoutUserGroupsInput;

    @Field(() => ChannelDmCreateOrConnectWithoutUserGroupsInput, {nullable:true})
    @Type(() => ChannelDmCreateOrConnectWithoutUserGroupsInput)
    connectOrCreate?: ChannelDmCreateOrConnectWithoutUserGroupsInput;

    @Field(() => ChannelDmUpsertWithoutUserGroupsInput, {nullable:true})
    @Type(() => ChannelDmUpsertWithoutUserGroupsInput)
    upsert?: ChannelDmUpsertWithoutUserGroupsInput;

    @Field(() => ChannelDmWhereUniqueInput, {nullable:true})
    @Type(() => ChannelDmWhereUniqueInput)
    connect?: ChannelDmWhereUniqueInput;

    @Field(() => ChannelDmUpdateWithoutUserGroupsInput, {nullable:true})
    @Type(() => ChannelDmUpdateWithoutUserGroupsInput)
    update?: ChannelDmUpdateWithoutUserGroupsInput;
}

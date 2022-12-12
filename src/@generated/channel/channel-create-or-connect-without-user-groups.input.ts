import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { Type } from 'class-transformer';
import { ChannelCreateWithoutUserGroupsInput } from './channel-create-without-user-groups.input';

@InputType()
export class ChannelCreateOrConnectWithoutUserGroupsInput {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    @Type(() => ChannelWhereUniqueInput)
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelCreateWithoutUserGroupsInput, {nullable:false})
    @Type(() => ChannelCreateWithoutUserGroupsInput)
    create!: ChannelCreateWithoutUserGroupsInput;
}

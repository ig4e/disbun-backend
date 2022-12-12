import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelDmWhereUniqueInput } from './channel-dm-where-unique.input';
import { Type } from 'class-transformer';
import { ChannelDmCreateWithoutUserGroupsInput } from './channel-dm-create-without-user-groups.input';

@InputType()
export class ChannelDmCreateOrConnectWithoutUserGroupsInput {

    @Field(() => ChannelDmWhereUniqueInput, {nullable:false})
    @Type(() => ChannelDmWhereUniqueInput)
    where!: ChannelDmWhereUniqueInput;

    @Field(() => ChannelDmCreateWithoutUserGroupsInput, {nullable:false})
    @Type(() => ChannelDmCreateWithoutUserGroupsInput)
    create!: ChannelDmCreateWithoutUserGroupsInput;
}

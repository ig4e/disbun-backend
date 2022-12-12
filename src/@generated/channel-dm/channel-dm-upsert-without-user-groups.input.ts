import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelDmUpdateWithoutUserGroupsInput } from './channel-dm-update-without-user-groups.input';
import { Type } from 'class-transformer';
import { ChannelDmCreateWithoutUserGroupsInput } from './channel-dm-create-without-user-groups.input';

@InputType()
export class ChannelDmUpsertWithoutUserGroupsInput {

    @Field(() => ChannelDmUpdateWithoutUserGroupsInput, {nullable:false})
    @Type(() => ChannelDmUpdateWithoutUserGroupsInput)
    update!: ChannelDmUpdateWithoutUserGroupsInput;

    @Field(() => ChannelDmCreateWithoutUserGroupsInput, {nullable:false})
    @Type(() => ChannelDmCreateWithoutUserGroupsInput)
    create!: ChannelDmCreateWithoutUserGroupsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelUpdateWithoutUserGroupsInput } from './channel-update-without-user-groups.input';
import { Type } from 'class-transformer';
import { ChannelCreateWithoutUserGroupsInput } from './channel-create-without-user-groups.input';

@InputType()
export class ChannelUpsertWithoutUserGroupsInput {

    @Field(() => ChannelUpdateWithoutUserGroupsInput, {nullable:false})
    @Type(() => ChannelUpdateWithoutUserGroupsInput)
    update!: ChannelUpdateWithoutUserGroupsInput;

    @Field(() => ChannelCreateWithoutUserGroupsInput, {nullable:false})
    @Type(() => ChannelCreateWithoutUserGroupsInput)
    create!: ChannelCreateWithoutUserGroupsInput;
}

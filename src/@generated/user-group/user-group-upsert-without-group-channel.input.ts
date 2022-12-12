import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupUpdateWithoutGroupChannelInput } from './user-group-update-without-group-channel.input';
import { Type } from 'class-transformer';
import { UserGroupCreateWithoutGroupChannelInput } from './user-group-create-without-group-channel.input';

@InputType()
export class UserGroupUpsertWithoutGroupChannelInput {

    @Field(() => UserGroupUpdateWithoutGroupChannelInput, {nullable:false})
    @Type(() => UserGroupUpdateWithoutGroupChannelInput)
    update!: UserGroupUpdateWithoutGroupChannelInput;

    @Field(() => UserGroupCreateWithoutGroupChannelInput, {nullable:false})
    @Type(() => UserGroupCreateWithoutGroupChannelInput)
    create!: UserGroupCreateWithoutGroupChannelInput;
}

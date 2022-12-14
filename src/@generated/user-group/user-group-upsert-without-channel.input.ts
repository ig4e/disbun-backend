import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupUpdateWithoutChannelInput } from './user-group-update-without-channel.input';
import { Type } from 'class-transformer';
import { UserGroupCreateWithoutChannelInput } from './user-group-create-without-channel.input';

@InputType()
export class UserGroupUpsertWithoutChannelInput {

    @Field(() => UserGroupUpdateWithoutChannelInput, {nullable:false})
    @Type(() => UserGroupUpdateWithoutChannelInput)
    update!: UserGroupUpdateWithoutChannelInput;

    @Field(() => UserGroupCreateWithoutChannelInput, {nullable:false})
    @Type(() => UserGroupCreateWithoutChannelInput)
    create!: UserGroupCreateWithoutChannelInput;
}

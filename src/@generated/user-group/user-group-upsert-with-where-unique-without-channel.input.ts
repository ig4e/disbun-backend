import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserGroupUpdateWithoutChannelInput } from './user-group-update-without-channel.input';
import { UserGroupCreateWithoutChannelInput } from './user-group-create-without-channel.input';

@InputType()
export class UserGroupUpsertWithWhereUniqueWithoutChannelInput {

    @Field(() => UserGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserGroupWhereUniqueInput)
    where!: UserGroupWhereUniqueInput;

    @Field(() => UserGroupUpdateWithoutChannelInput, {nullable:false})
    @Type(() => UserGroupUpdateWithoutChannelInput)
    update!: UserGroupUpdateWithoutChannelInput;

    @Field(() => UserGroupCreateWithoutChannelInput, {nullable:false})
    @Type(() => UserGroupCreateWithoutChannelInput)
    create!: UserGroupCreateWithoutChannelInput;
}

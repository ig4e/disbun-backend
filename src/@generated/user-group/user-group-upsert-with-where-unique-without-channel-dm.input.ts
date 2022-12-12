import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserGroupUpdateWithoutChannelDmInput } from './user-group-update-without-channel-dm.input';
import { UserGroupCreateWithoutChannelDmInput } from './user-group-create-without-channel-dm.input';

@InputType()
export class UserGroupUpsertWithWhereUniqueWithoutChannelDmInput {

    @Field(() => UserGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserGroupWhereUniqueInput)
    where!: UserGroupWhereUniqueInput;

    @Field(() => UserGroupUpdateWithoutChannelDmInput, {nullable:false})
    @Type(() => UserGroupUpdateWithoutChannelDmInput)
    update!: UserGroupUpdateWithoutChannelDmInput;

    @Field(() => UserGroupCreateWithoutChannelDmInput, {nullable:false})
    @Type(() => UserGroupCreateWithoutChannelDmInput)
    create!: UserGroupCreateWithoutChannelDmInput;
}

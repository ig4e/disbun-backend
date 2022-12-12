import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserGroupCreateWithoutGroupChannelInput } from './user-group-create-without-group-channel.input';

@InputType()
export class UserGroupCreateOrConnectWithoutGroupChannelInput {

    @Field(() => UserGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserGroupWhereUniqueInput)
    where!: UserGroupWhereUniqueInput;

    @Field(() => UserGroupCreateWithoutGroupChannelInput, {nullable:false})
    @Type(() => UserGroupCreateWithoutGroupChannelInput)
    create!: UserGroupCreateWithoutGroupChannelInput;
}

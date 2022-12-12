import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserGroupCreateWithoutChannelInput } from './user-group-create-without-channel.input';

@InputType()
export class UserGroupCreateOrConnectWithoutChannelInput {

    @Field(() => UserGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserGroupWhereUniqueInput)
    where!: UserGroupWhereUniqueInput;

    @Field(() => UserGroupCreateWithoutChannelInput, {nullable:false})
    @Type(() => UserGroupCreateWithoutChannelInput)
    create!: UserGroupCreateWithoutChannelInput;
}

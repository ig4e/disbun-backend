import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserGroupCreateWithoutChannelDmInput } from './user-group-create-without-channel-dm.input';

@InputType()
export class UserGroupCreateOrConnectWithoutChannelDmInput {

    @Field(() => UserGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserGroupWhereUniqueInput)
    where!: UserGroupWhereUniqueInput;

    @Field(() => UserGroupCreateWithoutChannelDmInput, {nullable:false})
    @Type(() => UserGroupCreateWithoutChannelDmInput)
    create!: UserGroupCreateWithoutChannelDmInput;
}

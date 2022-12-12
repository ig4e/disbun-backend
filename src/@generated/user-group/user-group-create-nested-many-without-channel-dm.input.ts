import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutChannelDmInput } from './user-group-create-without-channel-dm.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutChannelDmInput } from './user-group-create-or-connect-without-channel-dm.input';
import { UserGroupCreateManyChannelDmInputEnvelope } from './user-group-create-many-channel-dm-input-envelope.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';

@InputType()
export class UserGroupCreateNestedManyWithoutChannelDmInput {

    @Field(() => [UserGroupCreateWithoutChannelDmInput], {nullable:true})
    @Type(() => UserGroupCreateWithoutChannelDmInput)
    create?: Array<UserGroupCreateWithoutChannelDmInput>;

    @Field(() => [UserGroupCreateOrConnectWithoutChannelDmInput], {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutChannelDmInput)
    connectOrCreate?: Array<UserGroupCreateOrConnectWithoutChannelDmInput>;

    @Field(() => UserGroupCreateManyChannelDmInputEnvelope, {nullable:true})
    @Type(() => UserGroupCreateManyChannelDmInputEnvelope)
    createMany?: UserGroupCreateManyChannelDmInputEnvelope;

    @Field(() => [UserGroupWhereUniqueInput], {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    connect?: Array<UserGroupWhereUniqueInput>;
}

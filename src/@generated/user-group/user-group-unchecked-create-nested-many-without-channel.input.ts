import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutChannelInput } from './user-group-create-without-channel.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutChannelInput } from './user-group-create-or-connect-without-channel.input';
import { UserGroupCreateManyChannelInputEnvelope } from './user-group-create-many-channel-input-envelope.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';

@InputType()
export class UserGroupUncheckedCreateNestedManyWithoutChannelInput {

    @Field(() => [UserGroupCreateWithoutChannelInput], {nullable:true})
    @Type(() => UserGroupCreateWithoutChannelInput)
    create?: Array<UserGroupCreateWithoutChannelInput>;

    @Field(() => [UserGroupCreateOrConnectWithoutChannelInput], {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutChannelInput)
    connectOrCreate?: Array<UserGroupCreateOrConnectWithoutChannelInput>;

    @Field(() => UserGroupCreateManyChannelInputEnvelope, {nullable:true})
    @Type(() => UserGroupCreateManyChannelInputEnvelope)
    createMany?: UserGroupCreateManyChannelInputEnvelope;

    @Field(() => [UserGroupWhereUniqueInput], {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    connect?: Array<UserGroupWhereUniqueInput>;
}

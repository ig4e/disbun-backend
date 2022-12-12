import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutChannelInput } from './user-group-create-without-channel.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutChannelInput } from './user-group-create-or-connect-without-channel.input';
import { UserGroupUpsertWithWhereUniqueWithoutChannelInput } from './user-group-upsert-with-where-unique-without-channel.input';
import { UserGroupCreateManyChannelInputEnvelope } from './user-group-create-many-channel-input-envelope.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { UserGroupUpdateWithWhereUniqueWithoutChannelInput } from './user-group-update-with-where-unique-without-channel.input';
import { UserGroupUpdateManyWithWhereWithoutChannelInput } from './user-group-update-many-with-where-without-channel.input';
import { UserGroupScalarWhereInput } from './user-group-scalar-where.input';

@InputType()
export class UserGroupUpdateManyWithoutChannelNestedInput {

    @Field(() => [UserGroupCreateWithoutChannelInput], {nullable:true})
    @Type(() => UserGroupCreateWithoutChannelInput)
    create?: Array<UserGroupCreateWithoutChannelInput>;

    @Field(() => [UserGroupCreateOrConnectWithoutChannelInput], {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutChannelInput)
    connectOrCreate?: Array<UserGroupCreateOrConnectWithoutChannelInput>;

    @Field(() => [UserGroupUpsertWithWhereUniqueWithoutChannelInput], {nullable:true})
    @Type(() => UserGroupUpsertWithWhereUniqueWithoutChannelInput)
    upsert?: Array<UserGroupUpsertWithWhereUniqueWithoutChannelInput>;

    @Field(() => UserGroupCreateManyChannelInputEnvelope, {nullable:true})
    @Type(() => UserGroupCreateManyChannelInputEnvelope)
    createMany?: UserGroupCreateManyChannelInputEnvelope;

    @Field(() => [UserGroupWhereUniqueInput], {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    set?: Array<UserGroupWhereUniqueInput>;

    @Field(() => [UserGroupWhereUniqueInput], {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    disconnect?: Array<UserGroupWhereUniqueInput>;

    @Field(() => [UserGroupWhereUniqueInput], {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    delete?: Array<UserGroupWhereUniqueInput>;

    @Field(() => [UserGroupWhereUniqueInput], {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    connect?: Array<UserGroupWhereUniqueInput>;

    @Field(() => [UserGroupUpdateWithWhereUniqueWithoutChannelInput], {nullable:true})
    @Type(() => UserGroupUpdateWithWhereUniqueWithoutChannelInput)
    update?: Array<UserGroupUpdateWithWhereUniqueWithoutChannelInput>;

    @Field(() => [UserGroupUpdateManyWithWhereWithoutChannelInput], {nullable:true})
    @Type(() => UserGroupUpdateManyWithWhereWithoutChannelInput)
    updateMany?: Array<UserGroupUpdateManyWithWhereWithoutChannelInput>;

    @Field(() => [UserGroupScalarWhereInput], {nullable:true})
    @Type(() => UserGroupScalarWhereInput)
    deleteMany?: Array<UserGroupScalarWhereInput>;
}

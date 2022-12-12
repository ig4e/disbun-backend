import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutChannelDmInput } from './user-group-create-without-channel-dm.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutChannelDmInput } from './user-group-create-or-connect-without-channel-dm.input';
import { UserGroupUpsertWithWhereUniqueWithoutChannelDmInput } from './user-group-upsert-with-where-unique-without-channel-dm.input';
import { UserGroupCreateManyChannelDmInputEnvelope } from './user-group-create-many-channel-dm-input-envelope.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { UserGroupUpdateWithWhereUniqueWithoutChannelDmInput } from './user-group-update-with-where-unique-without-channel-dm.input';
import { UserGroupUpdateManyWithWhereWithoutChannelDmInput } from './user-group-update-many-with-where-without-channel-dm.input';
import { UserGroupScalarWhereInput } from './user-group-scalar-where.input';

@InputType()
export class UserGroupUncheckedUpdateManyWithoutChannelDmNestedInput {

    @Field(() => [UserGroupCreateWithoutChannelDmInput], {nullable:true})
    @Type(() => UserGroupCreateWithoutChannelDmInput)
    create?: Array<UserGroupCreateWithoutChannelDmInput>;

    @Field(() => [UserGroupCreateOrConnectWithoutChannelDmInput], {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutChannelDmInput)
    connectOrCreate?: Array<UserGroupCreateOrConnectWithoutChannelDmInput>;

    @Field(() => [UserGroupUpsertWithWhereUniqueWithoutChannelDmInput], {nullable:true})
    @Type(() => UserGroupUpsertWithWhereUniqueWithoutChannelDmInput)
    upsert?: Array<UserGroupUpsertWithWhereUniqueWithoutChannelDmInput>;

    @Field(() => UserGroupCreateManyChannelDmInputEnvelope, {nullable:true})
    @Type(() => UserGroupCreateManyChannelDmInputEnvelope)
    createMany?: UserGroupCreateManyChannelDmInputEnvelope;

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

    @Field(() => [UserGroupUpdateWithWhereUniqueWithoutChannelDmInput], {nullable:true})
    @Type(() => UserGroupUpdateWithWhereUniqueWithoutChannelDmInput)
    update?: Array<UserGroupUpdateWithWhereUniqueWithoutChannelDmInput>;

    @Field(() => [UserGroupUpdateManyWithWhereWithoutChannelDmInput], {nullable:true})
    @Type(() => UserGroupUpdateManyWithWhereWithoutChannelDmInput)
    updateMany?: Array<UserGroupUpdateManyWithWhereWithoutChannelDmInput>;

    @Field(() => [UserGroupScalarWhereInput], {nullable:true})
    @Type(() => UserGroupScalarWhereInput)
    deleteMany?: Array<UserGroupScalarWhereInput>;
}

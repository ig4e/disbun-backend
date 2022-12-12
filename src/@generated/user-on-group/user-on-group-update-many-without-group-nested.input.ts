import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupCreateWithoutGroupInput } from './user-on-group-create-without-group.input';
import { Type } from 'class-transformer';
import { UserOnGroupCreateOrConnectWithoutGroupInput } from './user-on-group-create-or-connect-without-group.input';
import { UserOnGroupUpsertWithWhereUniqueWithoutGroupInput } from './user-on-group-upsert-with-where-unique-without-group.input';
import { UserOnGroupCreateManyGroupInputEnvelope } from './user-on-group-create-many-group-input-envelope.input';
import { UserOnGroupWhereUniqueInput } from './user-on-group-where-unique.input';
import { UserOnGroupUpdateWithWhereUniqueWithoutGroupInput } from './user-on-group-update-with-where-unique-without-group.input';
import { UserOnGroupUpdateManyWithWhereWithoutGroupInput } from './user-on-group-update-many-with-where-without-group.input';
import { UserOnGroupScalarWhereInput } from './user-on-group-scalar-where.input';

@InputType()
export class UserOnGroupUpdateManyWithoutGroupNestedInput {

    @Field(() => [UserOnGroupCreateWithoutGroupInput], {nullable:true})
    @Type(() => UserOnGroupCreateWithoutGroupInput)
    create?: Array<UserOnGroupCreateWithoutGroupInput>;

    @Field(() => [UserOnGroupCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => UserOnGroupCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<UserOnGroupCreateOrConnectWithoutGroupInput>;

    @Field(() => [UserOnGroupUpsertWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => UserOnGroupUpsertWithWhereUniqueWithoutGroupInput)
    upsert?: Array<UserOnGroupUpsertWithWhereUniqueWithoutGroupInput>;

    @Field(() => UserOnGroupCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => UserOnGroupCreateManyGroupInputEnvelope)
    createMany?: UserOnGroupCreateManyGroupInputEnvelope;

    @Field(() => [UserOnGroupWhereUniqueInput], {nullable:true})
    @Type(() => UserOnGroupWhereUniqueInput)
    set?: Array<UserOnGroupWhereUniqueInput>;

    @Field(() => [UserOnGroupWhereUniqueInput], {nullable:true})
    @Type(() => UserOnGroupWhereUniqueInput)
    disconnect?: Array<UserOnGroupWhereUniqueInput>;

    @Field(() => [UserOnGroupWhereUniqueInput], {nullable:true})
    @Type(() => UserOnGroupWhereUniqueInput)
    delete?: Array<UserOnGroupWhereUniqueInput>;

    @Field(() => [UserOnGroupWhereUniqueInput], {nullable:true})
    @Type(() => UserOnGroupWhereUniqueInput)
    connect?: Array<UserOnGroupWhereUniqueInput>;

    @Field(() => [UserOnGroupUpdateWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => UserOnGroupUpdateWithWhereUniqueWithoutGroupInput)
    update?: Array<UserOnGroupUpdateWithWhereUniqueWithoutGroupInput>;

    @Field(() => [UserOnGroupUpdateManyWithWhereWithoutGroupInput], {nullable:true})
    @Type(() => UserOnGroupUpdateManyWithWhereWithoutGroupInput)
    updateMany?: Array<UserOnGroupUpdateManyWithWhereWithoutGroupInput>;

    @Field(() => [UserOnGroupScalarWhereInput], {nullable:true})
    @Type(() => UserOnGroupScalarWhereInput)
    deleteMany?: Array<UserOnGroupScalarWhereInput>;
}

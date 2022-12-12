import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupCreateWithoutUserInput } from './user-on-group-create-without-user.input';
import { Type } from 'class-transformer';
import { UserOnGroupCreateOrConnectWithoutUserInput } from './user-on-group-create-or-connect-without-user.input';
import { UserOnGroupUpsertWithWhereUniqueWithoutUserInput } from './user-on-group-upsert-with-where-unique-without-user.input';
import { UserOnGroupCreateManyUserInputEnvelope } from './user-on-group-create-many-user-input-envelope.input';
import { UserOnGroupWhereUniqueInput } from './user-on-group-where-unique.input';
import { UserOnGroupUpdateWithWhereUniqueWithoutUserInput } from './user-on-group-update-with-where-unique-without-user.input';
import { UserOnGroupUpdateManyWithWhereWithoutUserInput } from './user-on-group-update-many-with-where-without-user.input';
import { UserOnGroupScalarWhereInput } from './user-on-group-scalar-where.input';

@InputType()
export class UserOnGroupUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserOnGroupCreateWithoutUserInput], {nullable:true})
    @Type(() => UserOnGroupCreateWithoutUserInput)
    create?: Array<UserOnGroupCreateWithoutUserInput>;

    @Field(() => [UserOnGroupCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserOnGroupCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserOnGroupCreateOrConnectWithoutUserInput>;

    @Field(() => [UserOnGroupUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserOnGroupUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserOnGroupUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserOnGroupCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserOnGroupCreateManyUserInputEnvelope)
    createMany?: UserOnGroupCreateManyUserInputEnvelope;

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

    @Field(() => [UserOnGroupUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserOnGroupUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserOnGroupUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserOnGroupUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserOnGroupUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserOnGroupUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserOnGroupScalarWhereInput], {nullable:true})
    @Type(() => UserOnGroupScalarWhereInput)
    deleteMany?: Array<UserOnGroupScalarWhereInput>;
}

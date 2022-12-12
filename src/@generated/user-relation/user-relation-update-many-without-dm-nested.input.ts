import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateWithoutDmInput } from './user-relation-create-without-dm.input';
import { Type } from 'class-transformer';
import { UserRelationCreateOrConnectWithoutDmInput } from './user-relation-create-or-connect-without-dm.input';
import { UserRelationUpsertWithWhereUniqueWithoutDmInput } from './user-relation-upsert-with-where-unique-without-dm.input';
import { UserRelationCreateManyDmInputEnvelope } from './user-relation-create-many-dm-input-envelope.input';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { UserRelationUpdateWithWhereUniqueWithoutDmInput } from './user-relation-update-with-where-unique-without-dm.input';
import { UserRelationUpdateManyWithWhereWithoutDmInput } from './user-relation-update-many-with-where-without-dm.input';
import { UserRelationScalarWhereInput } from './user-relation-scalar-where.input';

@InputType()
export class UserRelationUpdateManyWithoutDmNestedInput {

    @Field(() => [UserRelationCreateWithoutDmInput], {nullable:true})
    @Type(() => UserRelationCreateWithoutDmInput)
    create?: Array<UserRelationCreateWithoutDmInput>;

    @Field(() => [UserRelationCreateOrConnectWithoutDmInput], {nullable:true})
    @Type(() => UserRelationCreateOrConnectWithoutDmInput)
    connectOrCreate?: Array<UserRelationCreateOrConnectWithoutDmInput>;

    @Field(() => [UserRelationUpsertWithWhereUniqueWithoutDmInput], {nullable:true})
    @Type(() => UserRelationUpsertWithWhereUniqueWithoutDmInput)
    upsert?: Array<UserRelationUpsertWithWhereUniqueWithoutDmInput>;

    @Field(() => UserRelationCreateManyDmInputEnvelope, {nullable:true})
    @Type(() => UserRelationCreateManyDmInputEnvelope)
    createMany?: UserRelationCreateManyDmInputEnvelope;

    @Field(() => [UserRelationWhereUniqueInput], {nullable:true})
    @Type(() => UserRelationWhereUniqueInput)
    set?: Array<UserRelationWhereUniqueInput>;

    @Field(() => [UserRelationWhereUniqueInput], {nullable:true})
    @Type(() => UserRelationWhereUniqueInput)
    disconnect?: Array<UserRelationWhereUniqueInput>;

    @Field(() => [UserRelationWhereUniqueInput], {nullable:true})
    @Type(() => UserRelationWhereUniqueInput)
    delete?: Array<UserRelationWhereUniqueInput>;

    @Field(() => [UserRelationWhereUniqueInput], {nullable:true})
    @Type(() => UserRelationWhereUniqueInput)
    connect?: Array<UserRelationWhereUniqueInput>;

    @Field(() => [UserRelationUpdateWithWhereUniqueWithoutDmInput], {nullable:true})
    @Type(() => UserRelationUpdateWithWhereUniqueWithoutDmInput)
    update?: Array<UserRelationUpdateWithWhereUniqueWithoutDmInput>;

    @Field(() => [UserRelationUpdateManyWithWhereWithoutDmInput], {nullable:true})
    @Type(() => UserRelationUpdateManyWithWhereWithoutDmInput)
    updateMany?: Array<UserRelationUpdateManyWithWhereWithoutDmInput>;

    @Field(() => [UserRelationScalarWhereInput], {nullable:true})
    @Type(() => UserRelationScalarWhereInput)
    deleteMany?: Array<UserRelationScalarWhereInput>;
}

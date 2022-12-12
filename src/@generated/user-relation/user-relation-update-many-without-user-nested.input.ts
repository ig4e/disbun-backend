import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateWithoutUserInput } from './user-relation-create-without-user.input';
import { Type } from 'class-transformer';
import { UserRelationCreateOrConnectWithoutUserInput } from './user-relation-create-or-connect-without-user.input';
import { UserRelationUpsertWithWhereUniqueWithoutUserInput } from './user-relation-upsert-with-where-unique-without-user.input';
import { UserRelationCreateManyUserInputEnvelope } from './user-relation-create-many-user-input-envelope.input';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { UserRelationUpdateWithWhereUniqueWithoutUserInput } from './user-relation-update-with-where-unique-without-user.input';
import { UserRelationUpdateManyWithWhereWithoutUserInput } from './user-relation-update-many-with-where-without-user.input';
import { UserRelationScalarWhereInput } from './user-relation-scalar-where.input';

@InputType()
export class UserRelationUpdateManyWithoutUserNestedInput {

    @Field(() => [UserRelationCreateWithoutUserInput], {nullable:true})
    @Type(() => UserRelationCreateWithoutUserInput)
    create?: Array<UserRelationCreateWithoutUserInput>;

    @Field(() => [UserRelationCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserRelationCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserRelationCreateOrConnectWithoutUserInput>;

    @Field(() => [UserRelationUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserRelationUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserRelationUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserRelationCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserRelationCreateManyUserInputEnvelope)
    createMany?: UserRelationCreateManyUserInputEnvelope;

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

    @Field(() => [UserRelationUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserRelationUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserRelationUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserRelationUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserRelationUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserRelationUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserRelationScalarWhereInput], {nullable:true})
    @Type(() => UserRelationScalarWhereInput)
    deleteMany?: Array<UserRelationScalarWhereInput>;
}

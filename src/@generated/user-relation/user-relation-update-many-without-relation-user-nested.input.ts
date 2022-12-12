import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateWithoutRelationUserInput } from './user-relation-create-without-relation-user.input';
import { Type } from 'class-transformer';
import { UserRelationCreateOrConnectWithoutRelationUserInput } from './user-relation-create-or-connect-without-relation-user.input';
import { UserRelationUpsertWithWhereUniqueWithoutRelationUserInput } from './user-relation-upsert-with-where-unique-without-relation-user.input';
import { UserRelationCreateManyRelationUserInputEnvelope } from './user-relation-create-many-relation-user-input-envelope.input';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { UserRelationUpdateWithWhereUniqueWithoutRelationUserInput } from './user-relation-update-with-where-unique-without-relation-user.input';
import { UserRelationUpdateManyWithWhereWithoutRelationUserInput } from './user-relation-update-many-with-where-without-relation-user.input';
import { UserRelationScalarWhereInput } from './user-relation-scalar-where.input';

@InputType()
export class UserRelationUpdateManyWithoutRelationUserNestedInput {

    @Field(() => [UserRelationCreateWithoutRelationUserInput], {nullable:true})
    @Type(() => UserRelationCreateWithoutRelationUserInput)
    create?: Array<UserRelationCreateWithoutRelationUserInput>;

    @Field(() => [UserRelationCreateOrConnectWithoutRelationUserInput], {nullable:true})
    @Type(() => UserRelationCreateOrConnectWithoutRelationUserInput)
    connectOrCreate?: Array<UserRelationCreateOrConnectWithoutRelationUserInput>;

    @Field(() => [UserRelationUpsertWithWhereUniqueWithoutRelationUserInput], {nullable:true})
    @Type(() => UserRelationUpsertWithWhereUniqueWithoutRelationUserInput)
    upsert?: Array<UserRelationUpsertWithWhereUniqueWithoutRelationUserInput>;

    @Field(() => UserRelationCreateManyRelationUserInputEnvelope, {nullable:true})
    @Type(() => UserRelationCreateManyRelationUserInputEnvelope)
    createMany?: UserRelationCreateManyRelationUserInputEnvelope;

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

    @Field(() => [UserRelationUpdateWithWhereUniqueWithoutRelationUserInput], {nullable:true})
    @Type(() => UserRelationUpdateWithWhereUniqueWithoutRelationUserInput)
    update?: Array<UserRelationUpdateWithWhereUniqueWithoutRelationUserInput>;

    @Field(() => [UserRelationUpdateManyWithWhereWithoutRelationUserInput], {nullable:true})
    @Type(() => UserRelationUpdateManyWithWhereWithoutRelationUserInput)
    updateMany?: Array<UserRelationUpdateManyWithWhereWithoutRelationUserInput>;

    @Field(() => [UserRelationScalarWhereInput], {nullable:true})
    @Type(() => UserRelationScalarWhereInput)
    deleteMany?: Array<UserRelationScalarWhereInput>;
}

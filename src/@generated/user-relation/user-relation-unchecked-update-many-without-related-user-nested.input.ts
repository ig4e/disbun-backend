import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateWithoutRelatedUserInput } from './user-relation-create-without-related-user.input';
import { Type } from 'class-transformer';
import { UserRelationCreateOrConnectWithoutRelatedUserInput } from './user-relation-create-or-connect-without-related-user.input';
import { UserRelationUpsertWithWhereUniqueWithoutRelatedUserInput } from './user-relation-upsert-with-where-unique-without-related-user.input';
import { UserRelationCreateManyRelatedUserInputEnvelope } from './user-relation-create-many-related-user-input-envelope.input';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { UserRelationUpdateWithWhereUniqueWithoutRelatedUserInput } from './user-relation-update-with-where-unique-without-related-user.input';
import { UserRelationUpdateManyWithWhereWithoutRelatedUserInput } from './user-relation-update-many-with-where-without-related-user.input';
import { UserRelationScalarWhereInput } from './user-relation-scalar-where.input';

@InputType()
export class UserRelationUncheckedUpdateManyWithoutRelatedUserNestedInput {

    @Field(() => [UserRelationCreateWithoutRelatedUserInput], {nullable:true})
    @Type(() => UserRelationCreateWithoutRelatedUserInput)
    create?: Array<UserRelationCreateWithoutRelatedUserInput>;

    @Field(() => [UserRelationCreateOrConnectWithoutRelatedUserInput], {nullable:true})
    @Type(() => UserRelationCreateOrConnectWithoutRelatedUserInput)
    connectOrCreate?: Array<UserRelationCreateOrConnectWithoutRelatedUserInput>;

    @Field(() => [UserRelationUpsertWithWhereUniqueWithoutRelatedUserInput], {nullable:true})
    @Type(() => UserRelationUpsertWithWhereUniqueWithoutRelatedUserInput)
    upsert?: Array<UserRelationUpsertWithWhereUniqueWithoutRelatedUserInput>;

    @Field(() => UserRelationCreateManyRelatedUserInputEnvelope, {nullable:true})
    @Type(() => UserRelationCreateManyRelatedUserInputEnvelope)
    createMany?: UserRelationCreateManyRelatedUserInputEnvelope;

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

    @Field(() => [UserRelationUpdateWithWhereUniqueWithoutRelatedUserInput], {nullable:true})
    @Type(() => UserRelationUpdateWithWhereUniqueWithoutRelatedUserInput)
    update?: Array<UserRelationUpdateWithWhereUniqueWithoutRelatedUserInput>;

    @Field(() => [UserRelationUpdateManyWithWhereWithoutRelatedUserInput], {nullable:true})
    @Type(() => UserRelationUpdateManyWithWhereWithoutRelatedUserInput)
    updateMany?: Array<UserRelationUpdateManyWithWhereWithoutRelatedUserInput>;

    @Field(() => [UserRelationScalarWhereInput], {nullable:true})
    @Type(() => UserRelationScalarWhereInput)
    deleteMany?: Array<UserRelationScalarWhereInput>;
}

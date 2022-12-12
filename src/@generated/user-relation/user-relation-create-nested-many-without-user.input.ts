import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateWithoutUserInput } from './user-relation-create-without-user.input';
import { Type } from 'class-transformer';
import { UserRelationCreateOrConnectWithoutUserInput } from './user-relation-create-or-connect-without-user.input';
import { UserRelationCreateManyUserInputEnvelope } from './user-relation-create-many-user-input-envelope.input';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';

@InputType()
export class UserRelationCreateNestedManyWithoutUserInput {

    @Field(() => [UserRelationCreateWithoutUserInput], {nullable:true})
    @Type(() => UserRelationCreateWithoutUserInput)
    create?: Array<UserRelationCreateWithoutUserInput>;

    @Field(() => [UserRelationCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserRelationCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserRelationCreateOrConnectWithoutUserInput>;

    @Field(() => UserRelationCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserRelationCreateManyUserInputEnvelope)
    createMany?: UserRelationCreateManyUserInputEnvelope;

    @Field(() => [UserRelationWhereUniqueInput], {nullable:true})
    @Type(() => UserRelationWhereUniqueInput)
    connect?: Array<UserRelationWhereUniqueInput>;
}

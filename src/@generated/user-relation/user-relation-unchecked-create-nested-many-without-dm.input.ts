import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateWithoutDmInput } from './user-relation-create-without-dm.input';
import { Type } from 'class-transformer';
import { UserRelationCreateOrConnectWithoutDmInput } from './user-relation-create-or-connect-without-dm.input';
import { UserRelationCreateManyDmInputEnvelope } from './user-relation-create-many-dm-input-envelope.input';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';

@InputType()
export class UserRelationUncheckedCreateNestedManyWithoutDmInput {

    @Field(() => [UserRelationCreateWithoutDmInput], {nullable:true})
    @Type(() => UserRelationCreateWithoutDmInput)
    create?: Array<UserRelationCreateWithoutDmInput>;

    @Field(() => [UserRelationCreateOrConnectWithoutDmInput], {nullable:true})
    @Type(() => UserRelationCreateOrConnectWithoutDmInput)
    connectOrCreate?: Array<UserRelationCreateOrConnectWithoutDmInput>;

    @Field(() => UserRelationCreateManyDmInputEnvelope, {nullable:true})
    @Type(() => UserRelationCreateManyDmInputEnvelope)
    createMany?: UserRelationCreateManyDmInputEnvelope;

    @Field(() => [UserRelationWhereUniqueInput], {nullable:true})
    @Type(() => UserRelationWhereUniqueInput)
    connect?: Array<UserRelationWhereUniqueInput>;
}

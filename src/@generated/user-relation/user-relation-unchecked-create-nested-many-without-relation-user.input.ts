import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateWithoutRelationUserInput } from './user-relation-create-without-relation-user.input';
import { Type } from 'class-transformer';
import { UserRelationCreateOrConnectWithoutRelationUserInput } from './user-relation-create-or-connect-without-relation-user.input';
import { UserRelationCreateManyRelationUserInputEnvelope } from './user-relation-create-many-relation-user-input-envelope.input';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';

@InputType()
export class UserRelationUncheckedCreateNestedManyWithoutRelationUserInput {

    @Field(() => [UserRelationCreateWithoutRelationUserInput], {nullable:true})
    @Type(() => UserRelationCreateWithoutRelationUserInput)
    create?: Array<UserRelationCreateWithoutRelationUserInput>;

    @Field(() => [UserRelationCreateOrConnectWithoutRelationUserInput], {nullable:true})
    @Type(() => UserRelationCreateOrConnectWithoutRelationUserInput)
    connectOrCreate?: Array<UserRelationCreateOrConnectWithoutRelationUserInput>;

    @Field(() => UserRelationCreateManyRelationUserInputEnvelope, {nullable:true})
    @Type(() => UserRelationCreateManyRelationUserInputEnvelope)
    createMany?: UserRelationCreateManyRelationUserInputEnvelope;

    @Field(() => [UserRelationWhereUniqueInput], {nullable:true})
    @Type(() => UserRelationWhereUniqueInput)
    connect?: Array<UserRelationWhereUniqueInput>;
}

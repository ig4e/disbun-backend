import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateWithoutRelatedUserInput } from './user-relation-create-without-related-user.input';
import { Type } from 'class-transformer';
import { UserRelationCreateOrConnectWithoutRelatedUserInput } from './user-relation-create-or-connect-without-related-user.input';
import { UserRelationCreateManyRelatedUserInputEnvelope } from './user-relation-create-many-related-user-input-envelope.input';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';

@InputType()
export class UserRelationCreateNestedManyWithoutRelatedUserInput {

    @Field(() => [UserRelationCreateWithoutRelatedUserInput], {nullable:true})
    @Type(() => UserRelationCreateWithoutRelatedUserInput)
    create?: Array<UserRelationCreateWithoutRelatedUserInput>;

    @Field(() => [UserRelationCreateOrConnectWithoutRelatedUserInput], {nullable:true})
    @Type(() => UserRelationCreateOrConnectWithoutRelatedUserInput)
    connectOrCreate?: Array<UserRelationCreateOrConnectWithoutRelatedUserInput>;

    @Field(() => UserRelationCreateManyRelatedUserInputEnvelope, {nullable:true})
    @Type(() => UserRelationCreateManyRelatedUserInputEnvelope)
    createMany?: UserRelationCreateManyRelatedUserInputEnvelope;

    @Field(() => [UserRelationWhereUniqueInput], {nullable:true})
    @Type(() => UserRelationWhereUniqueInput)
    connect?: Array<UserRelationWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Type } from 'class-transformer';
import { UserRelationCreateWithoutRelatedUserInput } from './user-relation-create-without-related-user.input';

@InputType()
export class UserRelationCreateOrConnectWithoutRelatedUserInput {

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;

    @Field(() => UserRelationCreateWithoutRelatedUserInput, {nullable:false})
    @Type(() => UserRelationCreateWithoutRelatedUserInput)
    create!: UserRelationCreateWithoutRelatedUserInput;
}

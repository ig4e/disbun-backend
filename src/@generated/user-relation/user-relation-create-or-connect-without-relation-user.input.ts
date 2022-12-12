import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Type } from 'class-transformer';
import { UserRelationCreateWithoutRelationUserInput } from './user-relation-create-without-relation-user.input';

@InputType()
export class UserRelationCreateOrConnectWithoutRelationUserInput {

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;

    @Field(() => UserRelationCreateWithoutRelationUserInput, {nullable:false})
    @Type(() => UserRelationCreateWithoutRelationUserInput)
    create!: UserRelationCreateWithoutRelationUserInput;
}

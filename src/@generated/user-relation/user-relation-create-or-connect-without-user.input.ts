import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Type } from 'class-transformer';
import { UserRelationCreateWithoutUserInput } from './user-relation-create-without-user.input';

@InputType()
export class UserRelationCreateOrConnectWithoutUserInput {

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;

    @Field(() => UserRelationCreateWithoutUserInput, {nullable:false})
    @Type(() => UserRelationCreateWithoutUserInput)
    create!: UserRelationCreateWithoutUserInput;
}

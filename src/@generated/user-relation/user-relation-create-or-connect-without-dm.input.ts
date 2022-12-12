import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Type } from 'class-transformer';
import { UserRelationCreateWithoutDmInput } from './user-relation-create-without-dm.input';

@InputType()
export class UserRelationCreateOrConnectWithoutDmInput {

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;

    @Field(() => UserRelationCreateWithoutDmInput, {nullable:false})
    @Type(() => UserRelationCreateWithoutDmInput)
    create!: UserRelationCreateWithoutDmInput;
}

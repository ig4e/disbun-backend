import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Type } from 'class-transformer';
import { UserRelationUpdateWithoutDmInput } from './user-relation-update-without-dm.input';
import { UserRelationCreateWithoutDmInput } from './user-relation-create-without-dm.input';

@InputType()
export class UserRelationUpsertWithWhereUniqueWithoutDmInput {

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;

    @Field(() => UserRelationUpdateWithoutDmInput, {nullable:false})
    @Type(() => UserRelationUpdateWithoutDmInput)
    update!: UserRelationUpdateWithoutDmInput;

    @Field(() => UserRelationCreateWithoutDmInput, {nullable:false})
    @Type(() => UserRelationCreateWithoutDmInput)
    create!: UserRelationCreateWithoutDmInput;
}

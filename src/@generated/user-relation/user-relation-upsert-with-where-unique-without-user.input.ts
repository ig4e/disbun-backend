import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Type } from 'class-transformer';
import { UserRelationUpdateWithoutUserInput } from './user-relation-update-without-user.input';
import { UserRelationCreateWithoutUserInput } from './user-relation-create-without-user.input';

@InputType()
export class UserRelationUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;

    @Field(() => UserRelationUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserRelationUpdateWithoutUserInput)
    update!: UserRelationUpdateWithoutUserInput;

    @Field(() => UserRelationCreateWithoutUserInput, {nullable:false})
    @Type(() => UserRelationCreateWithoutUserInput)
    create!: UserRelationCreateWithoutUserInput;
}

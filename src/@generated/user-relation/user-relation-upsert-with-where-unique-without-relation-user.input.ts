import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Type } from 'class-transformer';
import { UserRelationUpdateWithoutRelationUserInput } from './user-relation-update-without-relation-user.input';
import { UserRelationCreateWithoutRelationUserInput } from './user-relation-create-without-relation-user.input';

@InputType()
export class UserRelationUpsertWithWhereUniqueWithoutRelationUserInput {

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;

    @Field(() => UserRelationUpdateWithoutRelationUserInput, {nullable:false})
    @Type(() => UserRelationUpdateWithoutRelationUserInput)
    update!: UserRelationUpdateWithoutRelationUserInput;

    @Field(() => UserRelationCreateWithoutRelationUserInput, {nullable:false})
    @Type(() => UserRelationCreateWithoutRelationUserInput)
    create!: UserRelationCreateWithoutRelationUserInput;
}

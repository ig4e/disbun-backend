import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Type } from 'class-transformer';
import { UserRelationUpdateWithoutRelatedUserInput } from './user-relation-update-without-related-user.input';
import { UserRelationCreateWithoutRelatedUserInput } from './user-relation-create-without-related-user.input';

@InputType()
export class UserRelationUpsertWithWhereUniqueWithoutRelatedUserInput {

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;

    @Field(() => UserRelationUpdateWithoutRelatedUserInput, {nullable:false})
    @Type(() => UserRelationUpdateWithoutRelatedUserInput)
    update!: UserRelationUpdateWithoutRelatedUserInput;

    @Field(() => UserRelationCreateWithoutRelatedUserInput, {nullable:false})
    @Type(() => UserRelationCreateWithoutRelatedUserInput)
    create!: UserRelationCreateWithoutRelatedUserInput;
}

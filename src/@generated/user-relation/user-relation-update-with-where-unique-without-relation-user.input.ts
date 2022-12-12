import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Type } from 'class-transformer';
import { UserRelationUpdateWithoutRelationUserInput } from './user-relation-update-without-relation-user.input';

@InputType()
export class UserRelationUpdateWithWhereUniqueWithoutRelationUserInput {

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;

    @Field(() => UserRelationUpdateWithoutRelationUserInput, {nullable:false})
    @Type(() => UserRelationUpdateWithoutRelationUserInput)
    data!: UserRelationUpdateWithoutRelationUserInput;
}

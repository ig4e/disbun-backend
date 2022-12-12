import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Type } from 'class-transformer';
import { UserRelationUpdateWithoutUserInput } from './user-relation-update-without-user.input';

@InputType()
export class UserRelationUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;

    @Field(() => UserRelationUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserRelationUpdateWithoutUserInput)
    data!: UserRelationUpdateWithoutUserInput;
}

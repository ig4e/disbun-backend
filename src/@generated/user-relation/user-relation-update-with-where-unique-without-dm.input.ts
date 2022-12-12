import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Type } from 'class-transformer';
import { UserRelationUpdateWithoutDmInput } from './user-relation-update-without-dm.input';

@InputType()
export class UserRelationUpdateWithWhereUniqueWithoutDmInput {

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;

    @Field(() => UserRelationUpdateWithoutDmInput, {nullable:false})
    @Type(() => UserRelationUpdateWithoutDmInput)
    data!: UserRelationUpdateWithoutDmInput;
}

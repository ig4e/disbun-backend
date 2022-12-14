import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    groups?: number;

    @Field(() => Int, {nullable:false})
    userSideRelations?: number;

    @Field(() => Int, {nullable:false})
    relations?: number;

    @Field(() => Int, {nullable:false})
    Messages?: number;

    @Field(() => Int, {nullable:false})
    MessageReactions?: number;
}

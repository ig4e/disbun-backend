import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MessageReactionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    emoji!: number;

    @Field(() => Int, {nullable:false})
    messageId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

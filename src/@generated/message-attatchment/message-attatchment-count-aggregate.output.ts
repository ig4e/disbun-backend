import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MessageAttatchmentCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    fileName!: number;

    @Field(() => Int, {nullable:false})
    contentType!: number;

    @Field(() => Int, {nullable:false})
    size!: number;

    @Field(() => Int, {nullable:false})
    messageId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

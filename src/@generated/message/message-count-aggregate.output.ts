import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class MessageCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    pinned!: number;

    @Field(() => Int, {nullable:false})
    content!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    refrenceId!: number;

    @Field(() => Int, {nullable:false})
    channelId!: number;

    @HideField()
    groupChannelId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

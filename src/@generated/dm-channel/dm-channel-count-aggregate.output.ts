import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DmChannelCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userRelationRelatedUserId!: number;

    @Field(() => Int, {nullable:false})
    userRelationUserId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

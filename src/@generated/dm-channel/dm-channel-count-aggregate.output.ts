import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class DmChannelCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @HideField()
    userRelationRelatedUserId!: number;

    @HideField()
    userRelationUserId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

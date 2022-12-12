import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserRelationCountAggregate {

    @Field(() => Int, {nullable:false})
    status!: number;

    @HideField()
    relatedUserId!: number;

    @HideField()
    userId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

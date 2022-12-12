import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserOnGroupCountAggregate {

    @Field(() => Int, {nullable:false})
    owner!: number;

    @HideField()
    groupId!: number;

    @HideField()
    userId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

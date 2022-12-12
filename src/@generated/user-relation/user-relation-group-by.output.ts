import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RelationStatus } from '../prisma/relation-status.enum';
import { HideField } from '@nestjs/graphql';
import { UserRelationCountAggregate } from './user-relation-count-aggregate.output';
import { UserRelationMinAggregate } from './user-relation-min-aggregate.output';
import { UserRelationMaxAggregate } from './user-relation-max-aggregate.output';

@ObjectType()
export class UserRelationGroupBy {

    @Field(() => RelationStatus, {nullable:false})
    status!: keyof typeof RelationStatus;

    @HideField()
    relatedUserId!: string;

    @HideField()
    userId!: string;

    @Field(() => UserRelationCountAggregate, {nullable:true})
    _count?: UserRelationCountAggregate;

    @Field(() => UserRelationMinAggregate, {nullable:true})
    _min?: UserRelationMinAggregate;

    @Field(() => UserRelationMaxAggregate, {nullable:true})
    _max?: UserRelationMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RelationStatus } from '../prisma/relation-status.enum';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserRelationMaxAggregate {

    @Field(() => RelationStatus, {nullable:true})
    status?: keyof typeof RelationStatus;

    @HideField()
    relatedUserId?: string;

    @HideField()
    userId?: string;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RelationStatus } from '../prisma/relation-status.enum';

@ObjectType()
export class UserRelationMaxAggregate {

    @Field(() => RelationStatus, {nullable:true})
    status?: keyof typeof RelationStatus;

    @Field(() => String, {nullable:true})
    relatedUserId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;
}

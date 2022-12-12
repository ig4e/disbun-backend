import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelationStatus } from '../prisma/relation-status.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserRelationCreateManyRelatedUserInput {

    @Field(() => RelationStatus, {nullable:true})
    status?: keyof typeof RelationStatus;

    @HideField()
    userId!: string;
}

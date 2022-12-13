import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelationStatus } from '../prisma/relation-status.enum';

@InputType()
export class UserRelationCreateManyInput {

    @Field(() => RelationStatus, {nullable:true})
    status?: keyof typeof RelationStatus;

    @Field(() => String, {nullable:false})
    relatedUserId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}

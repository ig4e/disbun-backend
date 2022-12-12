import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserRelationMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @HideField()
    relatedUserId?: true;

    @HideField()
    userId?: true;
}

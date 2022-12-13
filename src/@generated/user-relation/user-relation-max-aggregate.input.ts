import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserRelationMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    relatedUserId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

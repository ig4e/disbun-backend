import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class DmChannelCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @HideField()
    userRelationRelatedUserId?: true;

    @HideField()
    userRelationUserId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DmChannelCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userRelationRelatedUserId?: true;

    @Field(() => Boolean, {nullable:true})
    userRelationUserId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

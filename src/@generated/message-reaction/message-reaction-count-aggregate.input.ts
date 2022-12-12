import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MessageReactionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    emoji?: true;

    @Field(() => Boolean, {nullable:true})
    messageId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

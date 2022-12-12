import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { MessageOrderByWithRelationInput } from '../message/message-order-by-with-relation.input';

@InputType()
export class MessageReactionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emoji?: keyof typeof SortOrder;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: UserOrderByRelationAggregateInput;

    @Field(() => MessageOrderByWithRelationInput, {nullable:true})
    message?: MessageOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    messageId?: keyof typeof SortOrder;
}

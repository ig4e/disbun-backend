import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { UserRelationOrderByWithRelationInput } from '../user-relation/user-relation-order-by-with-relation.input';

@InputType()
export class DmChannelOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messages?: MessageOrderByRelationAggregateInput;

    @Field(() => UserRelationOrderByWithRelationInput, {nullable:true})
    userRelation?: UserRelationOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userRelationRelatedUserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userRelationUserId?: keyof typeof SortOrder;
}

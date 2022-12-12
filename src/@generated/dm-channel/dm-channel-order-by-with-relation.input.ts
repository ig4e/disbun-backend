import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { UserRelationOrderByWithRelationInput } from '../user-relation/user-relation-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class DmChannelOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messages?: MessageOrderByRelationAggregateInput;

    @Field(() => UserRelationOrderByWithRelationInput, {nullable:true})
    userRelation?: UserRelationOrderByWithRelationInput;

    @HideField()
    userRelationRelatedUserId?: keyof typeof SortOrder;

    @HideField()
    userRelationUserId?: keyof typeof SortOrder;
}

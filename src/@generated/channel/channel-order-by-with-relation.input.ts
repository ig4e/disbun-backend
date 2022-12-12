import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { UserRelationOrderByRelationAggregateInput } from '../user-relation/user-relation-order-by-relation-aggregate.input';
import { UserGroupOrderByRelationAggregateInput } from '../user-group/user-group-order-by-relation-aggregate.input';

@InputType()
export class ChannelOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messages?: MessageOrderByRelationAggregateInput;

    @Field(() => UserRelationOrderByRelationAggregateInput, {nullable:true})
    UserRelations?: UserRelationOrderByRelationAggregateInput;

    @Field(() => UserGroupOrderByRelationAggregateInput, {nullable:true})
    UserGroups?: UserGroupOrderByRelationAggregateInput;
}

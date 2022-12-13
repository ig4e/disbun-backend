import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { UserGroupOrderByWithRelationInput } from '../user-group/user-group-order-by-with-relation.input';

@InputType()
export class GroupChannelOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messages?: MessageOrderByRelationAggregateInput;

    @Field(() => UserGroupOrderByWithRelationInput, {nullable:true})
    group?: UserGroupOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userGroupId?: keyof typeof SortOrder;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { UserGroupOrderByWithRelationInput } from '../user-group/user-group-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class GroupChannelOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messages?: MessageOrderByRelationAggregateInput;

    @Field(() => UserGroupOrderByWithRelationInput, {nullable:true})
    group?: UserGroupOrderByWithRelationInput;

    @HideField()
    userGroupId?: keyof typeof SortOrder;
}

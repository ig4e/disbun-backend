import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GroupImageOrderByWithRelationInput } from '../group-image/group-image-order-by-with-relation.input';
import { UserOnGroupOrderByRelationAggregateInput } from '../user-on-group/user-on-group-order-by-relation-aggregate.input';
import { GroupChannelOrderByWithRelationInput } from '../group-channel/group-channel-order-by-with-relation.input';

@InputType()
export class UserGroupOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => GroupImageOrderByWithRelationInput, {nullable:true})
    image?: GroupImageOrderByWithRelationInput;

    @Field(() => UserOnGroupOrderByRelationAggregateInput, {nullable:true})
    users?: UserOnGroupOrderByRelationAggregateInput;

    @Field(() => GroupChannelOrderByWithRelationInput, {nullable:true})
    channel?: GroupChannelOrderByWithRelationInput;
}

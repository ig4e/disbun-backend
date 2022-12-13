import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { DmChannelOrderByWithRelationInput } from '../dm-channel/dm-channel-order-by-with-relation.input';

@InputType()
export class UserRelationOrderByWithRelationInput {

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    relatedUser?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    relatedUserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => DmChannelOrderByWithRelationInput, {nullable:true})
    channel?: DmChannelOrderByWithRelationInput;
}

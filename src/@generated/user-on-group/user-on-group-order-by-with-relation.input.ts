import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { UserGroupOrderByWithRelationInput } from '../user-group/user-group-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserOnGroupOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    owner?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => UserGroupOrderByWithRelationInput, {nullable:true})
    group?: UserGroupOrderByWithRelationInput;

    @HideField()
    groupId?: keyof typeof SortOrder;

    @HideField()
    userId?: keyof typeof SortOrder;
}

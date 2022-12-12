import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserGroupOrderByWithRelationInput } from '../user-group/user-group-order-by-with-relation.input';

@InputType()
export class GroupImageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => UserGroupOrderByWithRelationInput, {nullable:true})
    group?: UserGroupOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userGroupId?: keyof typeof SortOrder;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserOnGroupMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    owner?: keyof typeof SortOrder;

    @HideField()
    groupId?: keyof typeof SortOrder;

    @HideField()
    userId?: keyof typeof SortOrder;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserRelationMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @HideField()
    relatedUserId?: keyof typeof SortOrder;

    @HideField()
    userId?: keyof typeof SortOrder;
}

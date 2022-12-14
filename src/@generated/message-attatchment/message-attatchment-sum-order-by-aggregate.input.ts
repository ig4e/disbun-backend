import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MessageAttatchmentSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    size?: keyof typeof SortOrder;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageOrderByWithRelationInput } from '../message/message-order-by-with-relation.input';

@InputType()
export class MessageAttatchmentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    size?: keyof typeof SortOrder;

    @Field(() => MessageOrderByWithRelationInput, {nullable:true})
    message?: MessageOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    messageId?: keyof typeof SortOrder;
}

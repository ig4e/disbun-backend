import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserImageOrderByWithRelationInput } from '../user-image/user-image-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';
import { UserOnGroupOrderByRelationAggregateInput } from '../user-on-group/user-on-group-order-by-relation-aggregate.input';
import { UserRelationOrderByRelationAggregateInput } from '../user-relation/user-relation-order-by-relation-aggregate.input';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { MessageReactionOrderByRelationAggregateInput } from '../message-reaction/message-reaction-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => UserImageOrderByWithRelationInput, {nullable:true})
    image?: UserImageOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discriminator?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @HideField()
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    staff?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => UserOnGroupOrderByRelationAggregateInput, {nullable:true})
    groups?: UserOnGroupOrderByRelationAggregateInput;

    @Field(() => UserRelationOrderByRelationAggregateInput, {nullable:true})
    relations?: UserRelationOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    dateOfBirth?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserRelationOrderByRelationAggregateInput, {nullable:true})
    UserRelations?: UserRelationOrderByRelationAggregateInput;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    Messages?: MessageOrderByRelationAggregateInput;

    @Field(() => MessageReactionOrderByRelationAggregateInput, {nullable:true})
    MessageReactions?: MessageReactionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    messageReactionIDs?: keyof typeof SortOrder;
}

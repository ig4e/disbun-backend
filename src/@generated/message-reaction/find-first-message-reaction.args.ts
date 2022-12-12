import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageReactionWhereInput } from './message-reaction-where.input';
import { Type } from 'class-transformer';
import { MessageReactionOrderByWithRelationInput } from './message-reaction-order-by-with-relation.input';
import { MessageReactionWhereUniqueInput } from './message-reaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessageReactionScalarFieldEnum } from './message-reaction-scalar-field.enum';

@ArgsType()
export class FindFirstMessageReactionArgs {

    @Field(() => MessageReactionWhereInput, {nullable:true})
    @Type(() => MessageReactionWhereInput)
    where?: MessageReactionWhereInput;

    @Field(() => [MessageReactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageReactionOrderByWithRelationInput>;

    @Field(() => MessageReactionWhereUniqueInput, {nullable:true})
    cursor?: MessageReactionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MessageReactionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessageReactionScalarFieldEnum>;
}

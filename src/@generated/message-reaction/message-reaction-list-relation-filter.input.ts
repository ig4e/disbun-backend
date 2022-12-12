import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageReactionWhereInput } from './message-reaction-where.input';

@InputType()
export class MessageReactionListRelationFilter {

    @Field(() => MessageReactionWhereInput, {nullable:true})
    every?: MessageReactionWhereInput;

    @Field(() => MessageReactionWhereInput, {nullable:true})
    some?: MessageReactionWhereInput;

    @Field(() => MessageReactionWhereInput, {nullable:true})
    none?: MessageReactionWhereInput;
}

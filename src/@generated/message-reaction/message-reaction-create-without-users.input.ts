import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateNestedOneWithoutReactionsInput } from '../message/message-create-nested-one-without-reactions.input';

@InputType()
export class MessageReactionCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    emoji!: string;

    @Field(() => MessageCreateNestedOneWithoutReactionsInput, {nullable:false})
    message!: MessageCreateNestedOneWithoutReactionsInput;
}

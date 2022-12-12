import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutMessageReactionInput } from '../user/user-create-nested-many-without-message-reaction.input';
import { MessageCreateNestedOneWithoutReactionsInput } from '../message/message-create-nested-one-without-reactions.input';

@InputType()
export class MessageReactionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    emoji!: string;

    @Field(() => UserCreateNestedManyWithoutMessageReactionInput, {nullable:true})
    users?: UserCreateNestedManyWithoutMessageReactionInput;

    @Field(() => MessageCreateNestedOneWithoutReactionsInput, {nullable:false})
    message!: MessageCreateNestedOneWithoutReactionsInput;
}

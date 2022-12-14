import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutMessageReactionsInput } from '../user/user-create-nested-many-without-message-reactions.input';
import { MessageCreateNestedOneWithoutReactionsInput } from '../message/message-create-nested-one-without-reactions.input';

@InputType()
export class MessageReactionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    emoji!: string;

    @Field(() => UserCreateNestedManyWithoutMessageReactionsInput, {nullable:true})
    users?: UserCreateNestedManyWithoutMessageReactionsInput;

    @Field(() => MessageCreateNestedOneWithoutReactionsInput, {nullable:false})
    message!: MessageCreateNestedOneWithoutReactionsInput;
}

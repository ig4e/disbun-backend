import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutMessageReactionsInput } from '../user/user-create-nested-many-without-message-reactions.input';

@InputType()
export class MessageReactionCreateWithoutMessageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    emoji!: string;

    @Field(() => UserCreateNestedManyWithoutMessageReactionsInput, {nullable:true})
    users?: UserCreateNestedManyWithoutMessageReactionsInput;
}

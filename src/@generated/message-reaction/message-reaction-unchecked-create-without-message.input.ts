import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutMessageReactionsInput } from '../user/user-unchecked-create-nested-many-without-message-reactions.input';

@InputType()
export class MessageReactionUncheckedCreateWithoutMessageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    emoji!: string;

    @Field(() => UserUncheckedCreateNestedManyWithoutMessageReactionsInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutMessageReactionsInput;
}

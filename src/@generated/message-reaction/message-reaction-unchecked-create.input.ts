import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutMessageReactionInput } from '../user/user-unchecked-create-nested-many-without-message-reaction.input';

@InputType()
export class MessageReactionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    emoji!: string;

    @Field(() => UserUncheckedCreateNestedManyWithoutMessageReactionInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutMessageReactionInput;

    @Field(() => String, {nullable:false})
    messageId!: string;
}

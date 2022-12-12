import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutMessageReactionInput } from '../user/user-create-nested-many-without-message-reaction.input';

@InputType()
export class MessageReactionCreateWithoutMessageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    emoji!: string;

    @Field(() => UserCreateNestedManyWithoutMessageReactionInput, {nullable:true})
    users?: UserCreateNestedManyWithoutMessageReactionInput;
}

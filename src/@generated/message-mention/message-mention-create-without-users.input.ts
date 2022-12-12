import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateNestedOneWithoutMentionsInput } from '../message/message-create-nested-one-without-mentions.input';

@InputType()
export class MessageMentionCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageCreateNestedOneWithoutMentionsInput, {nullable:false})
    message!: MessageCreateNestedOneWithoutMentionsInput;
}

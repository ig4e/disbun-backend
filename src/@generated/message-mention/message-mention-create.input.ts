import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutMessageMentionInput } from '../user/user-create-nested-many-without-message-mention.input';
import { MessageCreateNestedOneWithoutMentionsInput } from '../message/message-create-nested-one-without-mentions.input';

@InputType()
export class MessageMentionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedManyWithoutMessageMentionInput, {nullable:true})
    users?: UserCreateNestedManyWithoutMessageMentionInput;

    @Field(() => MessageCreateNestedOneWithoutMentionsInput, {nullable:false})
    message!: MessageCreateNestedOneWithoutMentionsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionCreateNestedManyWithoutMessageInput } from '../message-mention/message-mention-create-nested-many-without-message.input';
import { MessageAttatchmentCreateNestedManyWithoutMessageInput } from '../message-attatchment/message-attatchment-create-nested-many-without-message.input';
import { MessageReactionCreateNestedManyWithoutMessageInput } from '../message-reaction/message-reaction-create-nested-many-without-message.input';

@InputType()
export class MessageCreateWithoutChannelDmInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => MessageMentionCreateNestedManyWithoutMessageInput, {nullable:true})
    mentions?: MessageMentionCreateNestedManyWithoutMessageInput;

    @Field(() => MessageAttatchmentCreateNestedManyWithoutMessageInput, {nullable:true})
    attachments?: MessageAttatchmentCreateNestedManyWithoutMessageInput;

    @Field(() => MessageReactionCreateNestedManyWithoutMessageInput, {nullable:true})
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageAttatchmentCreateNestedManyWithoutMessageInput } from '../message-attatchment/message-attatchment-create-nested-many-without-message.input';
import { MessageReactionCreateNestedManyWithoutMessageInput } from '../message-reaction/message-reaction-create-nested-many-without-message.input';
import { ChannelDmCreateNestedOneWithoutMessagesInput } from '../channel-dm/channel-dm-create-nested-one-without-messages.input';

@InputType()
export class MessageCreateWithoutMentionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => MessageAttatchmentCreateNestedManyWithoutMessageInput, {nullable:true})
    attachments?: MessageAttatchmentCreateNestedManyWithoutMessageInput;

    @Field(() => MessageReactionCreateNestedManyWithoutMessageInput, {nullable:true})
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ChannelDmCreateNestedOneWithoutMessagesInput, {nullable:false})
    ChannelDm!: ChannelDmCreateNestedOneWithoutMessagesInput;
}

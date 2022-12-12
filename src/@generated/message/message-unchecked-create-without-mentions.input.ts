import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageAttatchmentUncheckedCreateNestedManyWithoutMessageInput } from '../message-attatchment/message-attatchment-unchecked-create-nested-many-without-message.input';
import { MessageReactionUncheckedCreateNestedManyWithoutMessageInput } from '../message-reaction/message-reaction-unchecked-create-nested-many-without-message.input';

@InputType()
export class MessageUncheckedCreateWithoutMentionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => MessageAttatchmentUncheckedCreateNestedManyWithoutMessageInput, {nullable:true})
    attachments?: MessageAttatchmentUncheckedCreateNestedManyWithoutMessageInput;

    @Field(() => MessageReactionUncheckedCreateNestedManyWithoutMessageInput, {nullable:true})
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    ChannelDmId!: string;
}

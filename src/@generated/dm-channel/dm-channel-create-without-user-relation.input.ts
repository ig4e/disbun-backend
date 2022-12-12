import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateNestedManyWithoutChannelInput } from '../message/message-create-nested-many-without-channel.input';

@InputType()
export class DmChannelCreateWithoutUserRelationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageCreateNestedManyWithoutChannelInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutChannelInput;
}

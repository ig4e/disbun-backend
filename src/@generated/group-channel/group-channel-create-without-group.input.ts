import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateNestedManyWithoutGroupChannelInput } from '../message/message-create-nested-many-without-group-channel.input';

@InputType()
export class GroupChannelCreateWithoutGroupInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageCreateNestedManyWithoutGroupChannelInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutGroupChannelInput;
}

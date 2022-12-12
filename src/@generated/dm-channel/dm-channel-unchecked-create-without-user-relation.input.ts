import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUncheckedCreateNestedManyWithoutChannelInput } from '../message/message-unchecked-create-nested-many-without-channel.input';

@InputType()
export class DmChannelUncheckedCreateWithoutUserRelationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChannelInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput;
}

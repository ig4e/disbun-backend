import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUncheckedCreateNestedManyWithoutGroupChannelInput } from '../message/message-unchecked-create-nested-many-without-group-channel.input';

@InputType()
export class GroupChannelUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageUncheckedCreateNestedManyWithoutGroupChannelInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutGroupChannelInput;

    @Field(() => String, {nullable:false})
    userGroupId!: string;
}

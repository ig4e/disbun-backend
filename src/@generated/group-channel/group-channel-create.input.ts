import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateNestedManyWithoutGroupChannelInput } from '../message/message-create-nested-many-without-group-channel.input';
import { UserGroupCreateNestedOneWithoutChannelInput } from '../user-group/user-group-create-nested-one-without-channel.input';

@InputType()
export class GroupChannelCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageCreateNestedManyWithoutGroupChannelInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutGroupChannelInput;

    @Field(() => UserGroupCreateNestedOneWithoutChannelInput, {nullable:false})
    group!: UserGroupCreateNestedOneWithoutChannelInput;
}

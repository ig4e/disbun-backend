import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateNestedManyWithoutGroupChannelInput } from '../message/message-create-nested-many-without-group-channel.input';
import { UserGroupCreateNestedOneWithoutGroupChannelInput } from '../user-group/user-group-create-nested-one-without-group-channel.input';

@InputType()
export class GroupChannelCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageCreateNestedManyWithoutGroupChannelInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutGroupChannelInput;

    @Field(() => UserGroupCreateNestedOneWithoutGroupChannelInput, {nullable:false})
    group!: UserGroupCreateNestedOneWithoutGroupChannelInput;
}

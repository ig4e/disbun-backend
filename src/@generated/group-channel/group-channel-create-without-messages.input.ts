import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateNestedOneWithoutGroupChannelInput } from '../user-group/user-group-create-nested-one-without-group-channel.input';

@InputType()
export class GroupChannelCreateWithoutMessagesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserGroupCreateNestedOneWithoutGroupChannelInput, {nullable:false})
    group!: UserGroupCreateNestedOneWithoutGroupChannelInput;
}

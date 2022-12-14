import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateNestedOneWithoutChannelInput } from '../user-group/user-group-create-nested-one-without-channel.input';

@InputType()
export class GroupChannelCreateWithoutMessagesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserGroupCreateNestedOneWithoutChannelInput, {nullable:false})
    group!: UserGroupCreateNestedOneWithoutChannelInput;
}

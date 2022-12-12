import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelDmCreateNestedOneWithoutUserGroupsInput } from '../channel-dm/channel-dm-create-nested-one-without-user-groups.input';

@InputType()
export class UserGroupCreateWithoutUserOnGroupInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChannelDmCreateNestedOneWithoutUserGroupsInput, {nullable:false})
    ChannelDm!: ChannelDmCreateNestedOneWithoutUserGroupsInput;
}

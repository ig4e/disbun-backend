import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelType } from '../prisma/channel-type.enum';
import { MessageUncheckedCreateNestedManyWithoutChannelInput } from '../message/message-unchecked-create-nested-many-without-channel.input';
import { UserGroupUncheckedCreateNestedManyWithoutChannelInput } from '../user-group/user-group-unchecked-create-nested-many-without-channel.input';

@InputType()
export class ChannelUncheckedCreateWithoutUserRelationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChannelType, {nullable:true})
    type?: keyof typeof ChannelType;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChannelInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput;

    @Field(() => UserGroupUncheckedCreateNestedManyWithoutChannelInput, {nullable:true})
    UserGroups?: UserGroupUncheckedCreateNestedManyWithoutChannelInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelType } from '../prisma/channel-type.enum';
import { MessageCreateNestedManyWithoutChannelInput } from '../message/message-create-nested-many-without-channel.input';
import { UserGroupCreateNestedManyWithoutChannelInput } from '../user-group/user-group-create-nested-many-without-channel.input';

@InputType()
export class ChannelCreateWithoutUserRelationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChannelType, {nullable:true})
    type?: keyof typeof ChannelType;

    @Field(() => MessageCreateNestedManyWithoutChannelInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutChannelInput;

    @Field(() => UserGroupCreateNestedManyWithoutChannelInput, {nullable:true})
    UserGroups?: UserGroupCreateNestedManyWithoutChannelInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelType } from '../prisma/channel-type.enum';
import { MessageCreateNestedManyWithoutChannelDmInput } from '../message/message-create-nested-many-without-channel-dm.input';
import { UserGroupCreateNestedManyWithoutChannelDmInput } from '../user-group/user-group-create-nested-many-without-channel-dm.input';

@InputType()
export class ChannelDmCreateWithoutUserRelationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChannelType, {nullable:true})
    type?: keyof typeof ChannelType;

    @Field(() => MessageCreateNestedManyWithoutChannelDmInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutChannelDmInput;

    @Field(() => UserGroupCreateNestedManyWithoutChannelDmInput, {nullable:true})
    UserGroups?: UserGroupCreateNestedManyWithoutChannelDmInput;
}

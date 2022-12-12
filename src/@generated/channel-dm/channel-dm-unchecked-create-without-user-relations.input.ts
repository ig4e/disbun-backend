import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelType } from '../prisma/channel-type.enum';
import { MessageUncheckedCreateNestedManyWithoutChannelDmInput } from '../message/message-unchecked-create-nested-many-without-channel-dm.input';
import { UserGroupUncheckedCreateNestedManyWithoutChannelDmInput } from '../user-group/user-group-unchecked-create-nested-many-without-channel-dm.input';

@InputType()
export class ChannelDmUncheckedCreateWithoutUserRelationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChannelType, {nullable:true})
    type?: keyof typeof ChannelType;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChannelDmInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChannelDmInput;

    @Field(() => UserGroupUncheckedCreateNestedManyWithoutChannelDmInput, {nullable:true})
    UserGroups?: UserGroupUncheckedCreateNestedManyWithoutChannelDmInput;
}

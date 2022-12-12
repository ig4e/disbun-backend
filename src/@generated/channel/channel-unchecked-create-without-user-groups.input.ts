import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelType } from '../prisma/channel-type.enum';
import { MessageUncheckedCreateNestedManyWithoutChannelInput } from '../message/message-unchecked-create-nested-many-without-channel.input';
import { UserRelationUncheckedCreateNestedManyWithoutDmInput } from '../user-relation/user-relation-unchecked-create-nested-many-without-dm.input';

@InputType()
export class ChannelUncheckedCreateWithoutUserGroupsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChannelType, {nullable:true})
    type?: keyof typeof ChannelType;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChannelInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput;

    @Field(() => UserRelationUncheckedCreateNestedManyWithoutDmInput, {nullable:true})
    UserRelations?: UserRelationUncheckedCreateNestedManyWithoutDmInput;
}

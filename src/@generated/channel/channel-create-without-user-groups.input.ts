import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelType } from '../prisma/channel-type.enum';
import { MessageCreateNestedManyWithoutChannelInput } from '../message/message-create-nested-many-without-channel.input';
import { UserRelationCreateNestedManyWithoutDmInput } from '../user-relation/user-relation-create-nested-many-without-dm.input';

@InputType()
export class ChannelCreateWithoutUserGroupsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChannelType, {nullable:true})
    type?: keyof typeof ChannelType;

    @Field(() => MessageCreateNestedManyWithoutChannelInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutChannelInput;

    @Field(() => UserRelationCreateNestedManyWithoutDmInput, {nullable:true})
    UserRelations?: UserRelationCreateNestedManyWithoutDmInput;
}

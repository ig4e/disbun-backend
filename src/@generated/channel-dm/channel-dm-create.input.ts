import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelType } from '../prisma/channel-type.enum';
import { MessageCreateNestedManyWithoutChannelDmInput } from '../message/message-create-nested-many-without-channel-dm.input';
import { UserRelationCreateNestedManyWithoutDmInput } from '../user-relation/user-relation-create-nested-many-without-dm.input';
import { UserGroupCreateNestedManyWithoutChannelDmInput } from '../user-group/user-group-create-nested-many-without-channel-dm.input';

@InputType()
export class ChannelDmCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChannelType, {nullable:true})
    type?: keyof typeof ChannelType;

    @Field(() => MessageCreateNestedManyWithoutChannelDmInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutChannelDmInput;

    @Field(() => UserRelationCreateNestedManyWithoutDmInput, {nullable:true})
    UserRelations?: UserRelationCreateNestedManyWithoutDmInput;

    @Field(() => UserGroupCreateNestedManyWithoutChannelDmInput, {nullable:true})
    UserGroups?: UserGroupCreateNestedManyWithoutChannelDmInput;
}

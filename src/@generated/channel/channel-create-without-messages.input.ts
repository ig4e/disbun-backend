import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelType } from '../prisma/channel-type.enum';
import { UserRelationCreateNestedManyWithoutDmInput } from '../user-relation/user-relation-create-nested-many-without-dm.input';
import { UserGroupCreateNestedManyWithoutChannelInput } from '../user-group/user-group-create-nested-many-without-channel.input';

@InputType()
export class ChannelCreateWithoutMessagesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChannelType, {nullable:true})
    type?: keyof typeof ChannelType;

    @Field(() => UserRelationCreateNestedManyWithoutDmInput, {nullable:true})
    UserRelations?: UserRelationCreateNestedManyWithoutDmInput;

    @Field(() => UserGroupCreateNestedManyWithoutChannelInput, {nullable:true})
    UserGroups?: UserGroupCreateNestedManyWithoutChannelInput;
}

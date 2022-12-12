import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateNestedManyWithoutChannelInput } from '../message/message-create-nested-many-without-channel.input';
import { UserRelationCreateNestedOneWithoutChannelInput } from '../user-relation/user-relation-create-nested-one-without-channel.input';

@InputType()
export class DmChannelCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageCreateNestedManyWithoutChannelInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutChannelInput;

    @Field(() => UserRelationCreateNestedOneWithoutChannelInput, {nullable:false})
    userRelation!: UserRelationCreateNestedOneWithoutChannelInput;
}

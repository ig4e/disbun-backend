import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUncheckedCreateNestedManyWithoutChannelInput } from '../message/message-unchecked-create-nested-many-without-channel.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class DmChannelUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChannelInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput;

    @HideField()
    userRelationRelatedUserId!: string;

    @HideField()
    userRelationUserId!: string;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateNestedOneWithoutChannelInput } from '../user-relation/user-relation-create-nested-one-without-channel.input';

@InputType()
export class DmChannelCreateWithoutMessagesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserRelationCreateNestedOneWithoutChannelInput, {nullable:false})
    userRelation!: UserRelationCreateNestedOneWithoutChannelInput;
}

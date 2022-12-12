import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutMessageMentionInput } from '../user/user-create-nested-many-without-message-mention.input';

@InputType()
export class MessageMentionCreateWithoutMessageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedManyWithoutMessageMentionInput, {nullable:true})
    users?: UserCreateNestedManyWithoutMessageMentionInput;
}

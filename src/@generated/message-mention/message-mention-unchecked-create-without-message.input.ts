import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutMessageMentionInput } from '../user/user-unchecked-create-nested-many-without-message-mention.input';

@InputType()
export class MessageMentionUncheckedCreateWithoutMessageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserUncheckedCreateNestedManyWithoutMessageMentionInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutMessageMentionInput;
}

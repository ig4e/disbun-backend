import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMentionScalarWhereInput } from './message-mention-scalar-where.input';
import { Type } from 'class-transformer';
import { MessageMentionUpdateManyMutationInput } from './message-mention-update-many-mutation.input';

@InputType()
export class MessageMentionUpdateManyWithWhereWithoutUsersInput {

    @Field(() => MessageMentionScalarWhereInput, {nullable:false})
    @Type(() => MessageMentionScalarWhereInput)
    where!: MessageMentionScalarWhereInput;

    @Field(() => MessageMentionUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageMentionUpdateManyMutationInput)
    data!: MessageMentionUpdateManyMutationInput;
}

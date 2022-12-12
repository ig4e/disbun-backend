import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageReactionScalarWhereInput } from './message-reaction-scalar-where.input';
import { Type } from 'class-transformer';
import { MessageReactionUpdateManyMutationInput } from './message-reaction-update-many-mutation.input';

@InputType()
export class MessageReactionUpdateManyWithWhereWithoutMessageInput {

    @Field(() => MessageReactionScalarWhereInput, {nullable:false})
    @Type(() => MessageReactionScalarWhereInput)
    where!: MessageReactionScalarWhereInput;

    @Field(() => MessageReactionUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageReactionUpdateManyMutationInput)
    data!: MessageReactionUpdateManyMutationInput;
}

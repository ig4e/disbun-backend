import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageReactionUpdateManyMutationInput } from './message-reaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MessageReactionWhereInput } from './message-reaction-where.input';

@ArgsType()
export class UpdateManyMessageReactionArgs {

    @Field(() => MessageReactionUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageReactionUpdateManyMutationInput)
    data!: MessageReactionUpdateManyMutationInput;

    @Field(() => MessageReactionWhereInput, {nullable:true})
    @Type(() => MessageReactionWhereInput)
    where?: MessageReactionWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageReactionCreateInput } from './message-reaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMessageReactionArgs {

    @Field(() => MessageReactionCreateInput, {nullable:false})
    @Type(() => MessageReactionCreateInput)
    data!: MessageReactionCreateInput;
}

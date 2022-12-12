import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageReactionWhereInput } from './message-reaction-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMessageReactionArgs {

    @Field(() => MessageReactionWhereInput, {nullable:true})
    @Type(() => MessageReactionWhereInput)
    where?: MessageReactionWhereInput;
}

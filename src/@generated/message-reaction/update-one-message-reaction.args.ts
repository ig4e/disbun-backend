import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageReactionUpdateInput } from './message-reaction-update.input';
import { Type } from 'class-transformer';
import { MessageReactionWhereUniqueInput } from './message-reaction-where-unique.input';

@ArgsType()
export class UpdateOneMessageReactionArgs {

    @Field(() => MessageReactionUpdateInput, {nullable:false})
    @Type(() => MessageReactionUpdateInput)
    data!: MessageReactionUpdateInput;

    @Field(() => MessageReactionWhereUniqueInput, {nullable:false})
    @Type(() => MessageReactionWhereUniqueInput)
    where!: MessageReactionWhereUniqueInput;
}

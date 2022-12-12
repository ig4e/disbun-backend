import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageReactionWhereUniqueInput } from './message-reaction-where-unique.input';
import { Type } from 'class-transformer';
import { MessageReactionCreateInput } from './message-reaction-create.input';
import { MessageReactionUpdateInput } from './message-reaction-update.input';

@ArgsType()
export class UpsertOneMessageReactionArgs {

    @Field(() => MessageReactionWhereUniqueInput, {nullable:false})
    @Type(() => MessageReactionWhereUniqueInput)
    where!: MessageReactionWhereUniqueInput;

    @Field(() => MessageReactionCreateInput, {nullable:false})
    @Type(() => MessageReactionCreateInput)
    create!: MessageReactionCreateInput;

    @Field(() => MessageReactionUpdateInput, {nullable:false})
    @Type(() => MessageReactionUpdateInput)
    update!: MessageReactionUpdateInput;
}

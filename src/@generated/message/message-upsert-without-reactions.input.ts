import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUpdateWithoutReactionsInput } from './message-update-without-reactions.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutReactionsInput } from './message-create-without-reactions.input';

@InputType()
export class MessageUpsertWithoutReactionsInput {

    @Field(() => MessageUpdateWithoutReactionsInput, {nullable:false})
    @Type(() => MessageUpdateWithoutReactionsInput)
    update!: MessageUpdateWithoutReactionsInput;

    @Field(() => MessageCreateWithoutReactionsInput, {nullable:false})
    @Type(() => MessageCreateWithoutReactionsInput)
    create!: MessageCreateWithoutReactionsInput;
}

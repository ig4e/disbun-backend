import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutReactionsInput } from './message-create-without-reactions.input';

@InputType()
export class MessageCreateOrConnectWithoutReactionsInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutReactionsInput, {nullable:false})
    @Type(() => MessageCreateWithoutReactionsInput)
    create!: MessageCreateWithoutReactionsInput;
}

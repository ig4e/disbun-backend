import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutReactionsInput } from './message-create-without-reactions.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutReactionsInput } from './message-create-or-connect-without-reactions.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateNestedOneWithoutReactionsInput {

    @Field(() => MessageCreateWithoutReactionsInput, {nullable:true})
    @Type(() => MessageCreateWithoutReactionsInput)
    create?: MessageCreateWithoutReactionsInput;

    @Field(() => MessageCreateOrConnectWithoutReactionsInput, {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutReactionsInput)
    connectOrCreate?: MessageCreateOrConnectWithoutReactionsInput;

    @Field(() => MessageWhereUniqueInput, {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: MessageWhereUniqueInput;
}

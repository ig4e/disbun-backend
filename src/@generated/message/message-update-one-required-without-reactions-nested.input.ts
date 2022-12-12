import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutReactionsInput } from './message-create-without-reactions.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutReactionsInput } from './message-create-or-connect-without-reactions.input';
import { MessageUpsertWithoutReactionsInput } from './message-upsert-without-reactions.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutReactionsInput } from './message-update-without-reactions.input';

@InputType()
export class MessageUpdateOneRequiredWithoutReactionsNestedInput {

    @Field(() => MessageCreateWithoutReactionsInput, {nullable:true})
    @Type(() => MessageCreateWithoutReactionsInput)
    create?: MessageCreateWithoutReactionsInput;

    @Field(() => MessageCreateOrConnectWithoutReactionsInput, {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutReactionsInput)
    connectOrCreate?: MessageCreateOrConnectWithoutReactionsInput;

    @Field(() => MessageUpsertWithoutReactionsInput, {nullable:true})
    @Type(() => MessageUpsertWithoutReactionsInput)
    upsert?: MessageUpsertWithoutReactionsInput;

    @Field(() => MessageWhereUniqueInput, {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutReactionsInput, {nullable:true})
    @Type(() => MessageUpdateWithoutReactionsInput)
    update?: MessageUpdateWithoutReactionsInput;
}

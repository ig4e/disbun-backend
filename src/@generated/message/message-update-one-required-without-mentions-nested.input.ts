import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutMentionsInput } from './message-create-without-mentions.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutMentionsInput } from './message-create-or-connect-without-mentions.input';
import { MessageUpsertWithoutMentionsInput } from './message-upsert-without-mentions.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutMentionsInput } from './message-update-without-mentions.input';

@InputType()
export class MessageUpdateOneRequiredWithoutMentionsNestedInput {

    @Field(() => MessageCreateWithoutMentionsInput, {nullable:true})
    @Type(() => MessageCreateWithoutMentionsInput)
    create?: MessageCreateWithoutMentionsInput;

    @Field(() => MessageCreateOrConnectWithoutMentionsInput, {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutMentionsInput)
    connectOrCreate?: MessageCreateOrConnectWithoutMentionsInput;

    @Field(() => MessageUpsertWithoutMentionsInput, {nullable:true})
    @Type(() => MessageUpsertWithoutMentionsInput)
    upsert?: MessageUpsertWithoutMentionsInput;

    @Field(() => MessageWhereUniqueInput, {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutMentionsInput, {nullable:true})
    @Type(() => MessageUpdateWithoutMentionsInput)
    update?: MessageUpdateWithoutMentionsInput;
}

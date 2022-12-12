import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutMentionsInput } from './message-create-without-mentions.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutMentionsInput } from './message-create-or-connect-without-mentions.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateNestedOneWithoutMentionsInput {

    @Field(() => MessageCreateWithoutMentionsInput, {nullable:true})
    @Type(() => MessageCreateWithoutMentionsInput)
    create?: MessageCreateWithoutMentionsInput;

    @Field(() => MessageCreateOrConnectWithoutMentionsInput, {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutMentionsInput)
    connectOrCreate?: MessageCreateOrConnectWithoutMentionsInput;

    @Field(() => MessageWhereUniqueInput, {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: MessageWhereUniqueInput;
}

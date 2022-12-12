import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutMentionsInput } from './message-create-without-mentions.input';

@InputType()
export class MessageCreateOrConnectWithoutMentionsInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutMentionsInput, {nullable:false})
    @Type(() => MessageCreateWithoutMentionsInput)
    create!: MessageCreateWithoutMentionsInput;
}

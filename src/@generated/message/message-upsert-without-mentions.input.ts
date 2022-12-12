import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUpdateWithoutMentionsInput } from './message-update-without-mentions.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutMentionsInput } from './message-create-without-mentions.input';

@InputType()
export class MessageUpsertWithoutMentionsInput {

    @Field(() => MessageUpdateWithoutMentionsInput, {nullable:false})
    @Type(() => MessageUpdateWithoutMentionsInput)
    update!: MessageUpdateWithoutMentionsInput;

    @Field(() => MessageCreateWithoutMentionsInput, {nullable:false})
    @Type(() => MessageCreateWithoutMentionsInput)
    create!: MessageCreateWithoutMentionsInput;
}

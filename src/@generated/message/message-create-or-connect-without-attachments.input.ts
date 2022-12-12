import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutAttachmentsInput } from './message-create-without-attachments.input';

@InputType()
export class MessageCreateOrConnectWithoutAttachmentsInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutAttachmentsInput, {nullable:false})
    @Type(() => MessageCreateWithoutAttachmentsInput)
    create!: MessageCreateWithoutAttachmentsInput;
}

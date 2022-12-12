import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUpdateWithoutAttachmentsInput } from './message-update-without-attachments.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutAttachmentsInput } from './message-create-without-attachments.input';

@InputType()
export class MessageUpsertWithoutAttachmentsInput {

    @Field(() => MessageUpdateWithoutAttachmentsInput, {nullable:false})
    @Type(() => MessageUpdateWithoutAttachmentsInput)
    update!: MessageUpdateWithoutAttachmentsInput;

    @Field(() => MessageCreateWithoutAttachmentsInput, {nullable:false})
    @Type(() => MessageCreateWithoutAttachmentsInput)
    create!: MessageCreateWithoutAttachmentsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutAttachmentsInput } from './message-create-without-attachments.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutAttachmentsInput } from './message-create-or-connect-without-attachments.input';
import { MessageUpsertWithoutAttachmentsInput } from './message-upsert-without-attachments.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutAttachmentsInput } from './message-update-without-attachments.input';

@InputType()
export class MessageUpdateOneRequiredWithoutAttachmentsNestedInput {

    @Field(() => MessageCreateWithoutAttachmentsInput, {nullable:true})
    @Type(() => MessageCreateWithoutAttachmentsInput)
    create?: MessageCreateWithoutAttachmentsInput;

    @Field(() => MessageCreateOrConnectWithoutAttachmentsInput, {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutAttachmentsInput)
    connectOrCreate?: MessageCreateOrConnectWithoutAttachmentsInput;

    @Field(() => MessageUpsertWithoutAttachmentsInput, {nullable:true})
    @Type(() => MessageUpsertWithoutAttachmentsInput)
    upsert?: MessageUpsertWithoutAttachmentsInput;

    @Field(() => MessageWhereUniqueInput, {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutAttachmentsInput, {nullable:true})
    @Type(() => MessageUpdateWithoutAttachmentsInput)
    update?: MessageUpdateWithoutAttachmentsInput;
}

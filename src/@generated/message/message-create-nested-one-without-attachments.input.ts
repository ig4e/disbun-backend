import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutAttachmentsInput } from './message-create-without-attachments.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutAttachmentsInput } from './message-create-or-connect-without-attachments.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateNestedOneWithoutAttachmentsInput {

    @Field(() => MessageCreateWithoutAttachmentsInput, {nullable:true})
    @Type(() => MessageCreateWithoutAttachmentsInput)
    create?: MessageCreateWithoutAttachmentsInput;

    @Field(() => MessageCreateOrConnectWithoutAttachmentsInput, {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutAttachmentsInput)
    connectOrCreate?: MessageCreateOrConnectWithoutAttachmentsInput;

    @Field(() => MessageWhereUniqueInput, {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: MessageWhereUniqueInput;
}

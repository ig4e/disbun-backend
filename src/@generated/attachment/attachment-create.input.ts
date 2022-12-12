import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateNestedOneWithoutAttachmentsInput } from '../message/message-create-nested-one-without-attachments.input';

@InputType()
export class AttachmentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    fileName!: string;

    @Field(() => String, {nullable:true})
    contentType?: string;

    @Field(() => MessageCreateNestedOneWithoutAttachmentsInput, {nullable:false})
    message!: MessageCreateNestedOneWithoutAttachmentsInput;
}

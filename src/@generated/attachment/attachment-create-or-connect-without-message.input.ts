import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentWhereUniqueInput } from './attachment-where-unique.input';
import { Type } from 'class-transformer';
import { AttachmentCreateWithoutMessageInput } from './attachment-create-without-message.input';

@InputType()
export class AttachmentCreateOrConnectWithoutMessageInput {

    @Field(() => AttachmentWhereUniqueInput, {nullable:false})
    @Type(() => AttachmentWhereUniqueInput)
    where!: AttachmentWhereUniqueInput;

    @Field(() => AttachmentCreateWithoutMessageInput, {nullable:false})
    @Type(() => AttachmentCreateWithoutMessageInput)
    create!: AttachmentCreateWithoutMessageInput;
}

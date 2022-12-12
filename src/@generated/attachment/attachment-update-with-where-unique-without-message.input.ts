import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentWhereUniqueInput } from './attachment-where-unique.input';
import { Type } from 'class-transformer';
import { AttachmentUpdateWithoutMessageInput } from './attachment-update-without-message.input';

@InputType()
export class AttachmentUpdateWithWhereUniqueWithoutMessageInput {

    @Field(() => AttachmentWhereUniqueInput, {nullable:false})
    @Type(() => AttachmentWhereUniqueInput)
    where!: AttachmentWhereUniqueInput;

    @Field(() => AttachmentUpdateWithoutMessageInput, {nullable:false})
    @Type(() => AttachmentUpdateWithoutMessageInput)
    data!: AttachmentUpdateWithoutMessageInput;
}

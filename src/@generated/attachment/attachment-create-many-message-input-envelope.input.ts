import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentCreateManyMessageInput } from './attachment-create-many-message.input';
import { Type } from 'class-transformer';

@InputType()
export class AttachmentCreateManyMessageInputEnvelope {

    @Field(() => [AttachmentCreateManyMessageInput], {nullable:false})
    @Type(() => AttachmentCreateManyMessageInput)
    data!: Array<AttachmentCreateManyMessageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

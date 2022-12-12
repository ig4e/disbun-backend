import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentCreateWithoutMessageInput } from './attachment-create-without-message.input';
import { Type } from 'class-transformer';
import { AttachmentCreateOrConnectWithoutMessageInput } from './attachment-create-or-connect-without-message.input';
import { AttachmentCreateManyMessageInputEnvelope } from './attachment-create-many-message-input-envelope.input';
import { AttachmentWhereUniqueInput } from './attachment-where-unique.input';

@InputType()
export class AttachmentUncheckedCreateNestedManyWithoutMessageInput {

    @Field(() => [AttachmentCreateWithoutMessageInput], {nullable:true})
    @Type(() => AttachmentCreateWithoutMessageInput)
    create?: Array<AttachmentCreateWithoutMessageInput>;

    @Field(() => [AttachmentCreateOrConnectWithoutMessageInput], {nullable:true})
    @Type(() => AttachmentCreateOrConnectWithoutMessageInput)
    connectOrCreate?: Array<AttachmentCreateOrConnectWithoutMessageInput>;

    @Field(() => AttachmentCreateManyMessageInputEnvelope, {nullable:true})
    @Type(() => AttachmentCreateManyMessageInputEnvelope)
    createMany?: AttachmentCreateManyMessageInputEnvelope;

    @Field(() => [AttachmentWhereUniqueInput], {nullable:true})
    @Type(() => AttachmentWhereUniqueInput)
    connect?: Array<AttachmentWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentCreateWithoutMessageInput } from './attachment-create-without-message.input';
import { Type } from 'class-transformer';
import { AttachmentCreateOrConnectWithoutMessageInput } from './attachment-create-or-connect-without-message.input';
import { AttachmentUpsertWithWhereUniqueWithoutMessageInput } from './attachment-upsert-with-where-unique-without-message.input';
import { AttachmentCreateManyMessageInputEnvelope } from './attachment-create-many-message-input-envelope.input';
import { AttachmentWhereUniqueInput } from './attachment-where-unique.input';
import { AttachmentUpdateWithWhereUniqueWithoutMessageInput } from './attachment-update-with-where-unique-without-message.input';
import { AttachmentUpdateManyWithWhereWithoutMessageInput } from './attachment-update-many-with-where-without-message.input';
import { AttachmentScalarWhereInput } from './attachment-scalar-where.input';

@InputType()
export class AttachmentUncheckedUpdateManyWithoutMessageNestedInput {

    @Field(() => [AttachmentCreateWithoutMessageInput], {nullable:true})
    @Type(() => AttachmentCreateWithoutMessageInput)
    create?: Array<AttachmentCreateWithoutMessageInput>;

    @Field(() => [AttachmentCreateOrConnectWithoutMessageInput], {nullable:true})
    @Type(() => AttachmentCreateOrConnectWithoutMessageInput)
    connectOrCreate?: Array<AttachmentCreateOrConnectWithoutMessageInput>;

    @Field(() => [AttachmentUpsertWithWhereUniqueWithoutMessageInput], {nullable:true})
    @Type(() => AttachmentUpsertWithWhereUniqueWithoutMessageInput)
    upsert?: Array<AttachmentUpsertWithWhereUniqueWithoutMessageInput>;

    @Field(() => AttachmentCreateManyMessageInputEnvelope, {nullable:true})
    @Type(() => AttachmentCreateManyMessageInputEnvelope)
    createMany?: AttachmentCreateManyMessageInputEnvelope;

    @Field(() => [AttachmentWhereUniqueInput], {nullable:true})
    @Type(() => AttachmentWhereUniqueInput)
    set?: Array<AttachmentWhereUniqueInput>;

    @Field(() => [AttachmentWhereUniqueInput], {nullable:true})
    @Type(() => AttachmentWhereUniqueInput)
    disconnect?: Array<AttachmentWhereUniqueInput>;

    @Field(() => [AttachmentWhereUniqueInput], {nullable:true})
    @Type(() => AttachmentWhereUniqueInput)
    delete?: Array<AttachmentWhereUniqueInput>;

    @Field(() => [AttachmentWhereUniqueInput], {nullable:true})
    @Type(() => AttachmentWhereUniqueInput)
    connect?: Array<AttachmentWhereUniqueInput>;

    @Field(() => [AttachmentUpdateWithWhereUniqueWithoutMessageInput], {nullable:true})
    @Type(() => AttachmentUpdateWithWhereUniqueWithoutMessageInput)
    update?: Array<AttachmentUpdateWithWhereUniqueWithoutMessageInput>;

    @Field(() => [AttachmentUpdateManyWithWhereWithoutMessageInput], {nullable:true})
    @Type(() => AttachmentUpdateManyWithWhereWithoutMessageInput)
    updateMany?: Array<AttachmentUpdateManyWithWhereWithoutMessageInput>;

    @Field(() => [AttachmentScalarWhereInput], {nullable:true})
    @Type(() => AttachmentScalarWhereInput)
    deleteMany?: Array<AttachmentScalarWhereInput>;
}

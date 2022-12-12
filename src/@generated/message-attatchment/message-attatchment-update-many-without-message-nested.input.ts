import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageAttatchmentCreateWithoutMessageInput } from './message-attatchment-create-without-message.input';
import { Type } from 'class-transformer';
import { MessageAttatchmentCreateOrConnectWithoutMessageInput } from './message-attatchment-create-or-connect-without-message.input';
import { MessageAttatchmentUpsertWithWhereUniqueWithoutMessageInput } from './message-attatchment-upsert-with-where-unique-without-message.input';
import { MessageAttatchmentCreateManyMessageInputEnvelope } from './message-attatchment-create-many-message-input-envelope.input';
import { MessageAttatchmentWhereUniqueInput } from './message-attatchment-where-unique.input';
import { MessageAttatchmentUpdateWithWhereUniqueWithoutMessageInput } from './message-attatchment-update-with-where-unique-without-message.input';
import { MessageAttatchmentUpdateManyWithWhereWithoutMessageInput } from './message-attatchment-update-many-with-where-without-message.input';
import { MessageAttatchmentScalarWhereInput } from './message-attatchment-scalar-where.input';

@InputType()
export class MessageAttatchmentUpdateManyWithoutMessageNestedInput {

    @Field(() => [MessageAttatchmentCreateWithoutMessageInput], {nullable:true})
    @Type(() => MessageAttatchmentCreateWithoutMessageInput)
    create?: Array<MessageAttatchmentCreateWithoutMessageInput>;

    @Field(() => [MessageAttatchmentCreateOrConnectWithoutMessageInput], {nullable:true})
    @Type(() => MessageAttatchmentCreateOrConnectWithoutMessageInput)
    connectOrCreate?: Array<MessageAttatchmentCreateOrConnectWithoutMessageInput>;

    @Field(() => [MessageAttatchmentUpsertWithWhereUniqueWithoutMessageInput], {nullable:true})
    @Type(() => MessageAttatchmentUpsertWithWhereUniqueWithoutMessageInput)
    upsert?: Array<MessageAttatchmentUpsertWithWhereUniqueWithoutMessageInput>;

    @Field(() => MessageAttatchmentCreateManyMessageInputEnvelope, {nullable:true})
    @Type(() => MessageAttatchmentCreateManyMessageInputEnvelope)
    createMany?: MessageAttatchmentCreateManyMessageInputEnvelope;

    @Field(() => [MessageAttatchmentWhereUniqueInput], {nullable:true})
    @Type(() => MessageAttatchmentWhereUniqueInput)
    set?: Array<MessageAttatchmentWhereUniqueInput>;

    @Field(() => [MessageAttatchmentWhereUniqueInput], {nullable:true})
    @Type(() => MessageAttatchmentWhereUniqueInput)
    disconnect?: Array<MessageAttatchmentWhereUniqueInput>;

    @Field(() => [MessageAttatchmentWhereUniqueInput], {nullable:true})
    @Type(() => MessageAttatchmentWhereUniqueInput)
    delete?: Array<MessageAttatchmentWhereUniqueInput>;

    @Field(() => [MessageAttatchmentWhereUniqueInput], {nullable:true})
    @Type(() => MessageAttatchmentWhereUniqueInput)
    connect?: Array<MessageAttatchmentWhereUniqueInput>;

    @Field(() => [MessageAttatchmentUpdateWithWhereUniqueWithoutMessageInput], {nullable:true})
    @Type(() => MessageAttatchmentUpdateWithWhereUniqueWithoutMessageInput)
    update?: Array<MessageAttatchmentUpdateWithWhereUniqueWithoutMessageInput>;

    @Field(() => [MessageAttatchmentUpdateManyWithWhereWithoutMessageInput], {nullable:true})
    @Type(() => MessageAttatchmentUpdateManyWithWhereWithoutMessageInput)
    updateMany?: Array<MessageAttatchmentUpdateManyWithWhereWithoutMessageInput>;

    @Field(() => [MessageAttatchmentScalarWhereInput], {nullable:true})
    @Type(() => MessageAttatchmentScalarWhereInput)
    deleteMany?: Array<MessageAttatchmentScalarWhereInput>;
}

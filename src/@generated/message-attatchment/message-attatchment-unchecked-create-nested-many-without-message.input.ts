import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageAttatchmentCreateWithoutMessageInput } from './message-attatchment-create-without-message.input';
import { Type } from 'class-transformer';
import { MessageAttatchmentCreateOrConnectWithoutMessageInput } from './message-attatchment-create-or-connect-without-message.input';
import { MessageAttatchmentCreateManyMessageInputEnvelope } from './message-attatchment-create-many-message-input-envelope.input';
import { MessageAttatchmentWhereUniqueInput } from './message-attatchment-where-unique.input';

@InputType()
export class MessageAttatchmentUncheckedCreateNestedManyWithoutMessageInput {

    @Field(() => [MessageAttatchmentCreateWithoutMessageInput], {nullable:true})
    @Type(() => MessageAttatchmentCreateWithoutMessageInput)
    create?: Array<MessageAttatchmentCreateWithoutMessageInput>;

    @Field(() => [MessageAttatchmentCreateOrConnectWithoutMessageInput], {nullable:true})
    @Type(() => MessageAttatchmentCreateOrConnectWithoutMessageInput)
    connectOrCreate?: Array<MessageAttatchmentCreateOrConnectWithoutMessageInput>;

    @Field(() => MessageAttatchmentCreateManyMessageInputEnvelope, {nullable:true})
    @Type(() => MessageAttatchmentCreateManyMessageInputEnvelope)
    createMany?: MessageAttatchmentCreateManyMessageInputEnvelope;

    @Field(() => [MessageAttatchmentWhereUniqueInput], {nullable:true})
    @Type(() => MessageAttatchmentWhereUniqueInput)
    connect?: Array<MessageAttatchmentWhereUniqueInput>;
}

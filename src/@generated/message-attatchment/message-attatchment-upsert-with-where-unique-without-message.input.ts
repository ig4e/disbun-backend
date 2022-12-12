import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageAttatchmentWhereUniqueInput } from './message-attatchment-where-unique.input';
import { Type } from 'class-transformer';
import { MessageAttatchmentUpdateWithoutMessageInput } from './message-attatchment-update-without-message.input';
import { MessageAttatchmentCreateWithoutMessageInput } from './message-attatchment-create-without-message.input';

@InputType()
export class MessageAttatchmentUpsertWithWhereUniqueWithoutMessageInput {

    @Field(() => MessageAttatchmentWhereUniqueInput, {nullable:false})
    @Type(() => MessageAttatchmentWhereUniqueInput)
    where!: MessageAttatchmentWhereUniqueInput;

    @Field(() => MessageAttatchmentUpdateWithoutMessageInput, {nullable:false})
    @Type(() => MessageAttatchmentUpdateWithoutMessageInput)
    update!: MessageAttatchmentUpdateWithoutMessageInput;

    @Field(() => MessageAttatchmentCreateWithoutMessageInput, {nullable:false})
    @Type(() => MessageAttatchmentCreateWithoutMessageInput)
    create!: MessageAttatchmentCreateWithoutMessageInput;
}

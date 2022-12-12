import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageAttatchmentWhereUniqueInput } from './message-attatchment-where-unique.input';
import { Type } from 'class-transformer';
import { MessageAttatchmentUpdateWithoutMessageInput } from './message-attatchment-update-without-message.input';

@InputType()
export class MessageAttatchmentUpdateWithWhereUniqueWithoutMessageInput {

    @Field(() => MessageAttatchmentWhereUniqueInput, {nullable:false})
    @Type(() => MessageAttatchmentWhereUniqueInput)
    where!: MessageAttatchmentWhereUniqueInput;

    @Field(() => MessageAttatchmentUpdateWithoutMessageInput, {nullable:false})
    @Type(() => MessageAttatchmentUpdateWithoutMessageInput)
    data!: MessageAttatchmentUpdateWithoutMessageInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageAttatchmentWhereUniqueInput } from './message-attatchment-where-unique.input';
import { Type } from 'class-transformer';
import { MessageAttatchmentCreateWithoutMessageInput } from './message-attatchment-create-without-message.input';

@InputType()
export class MessageAttatchmentCreateOrConnectWithoutMessageInput {

    @Field(() => MessageAttatchmentWhereUniqueInput, {nullable:false})
    @Type(() => MessageAttatchmentWhereUniqueInput)
    where!: MessageAttatchmentWhereUniqueInput;

    @Field(() => MessageAttatchmentCreateWithoutMessageInput, {nullable:false})
    @Type(() => MessageAttatchmentCreateWithoutMessageInput)
    create!: MessageAttatchmentCreateWithoutMessageInput;
}

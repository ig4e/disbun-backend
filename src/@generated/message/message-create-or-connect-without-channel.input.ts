import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutChannelInput } from './message-create-without-channel.input';

@InputType()
export class MessageCreateOrConnectWithoutChannelInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutChannelInput, {nullable:false})
    @Type(() => MessageCreateWithoutChannelInput)
    create!: MessageCreateWithoutChannelInput;
}

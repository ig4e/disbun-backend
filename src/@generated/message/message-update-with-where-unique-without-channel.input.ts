import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutChannelInput } from './message-update-without-channel.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutChannelInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutChannelInput, {nullable:false})
    @Type(() => MessageUpdateWithoutChannelInput)
    data!: MessageUpdateWithoutChannelInput;
}

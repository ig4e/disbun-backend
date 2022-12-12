import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutGroupChannelInput } from './message-update-without-group-channel.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutGroupChannelInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutGroupChannelInput, {nullable:false})
    @Type(() => MessageUpdateWithoutGroupChannelInput)
    data!: MessageUpdateWithoutGroupChannelInput;
}

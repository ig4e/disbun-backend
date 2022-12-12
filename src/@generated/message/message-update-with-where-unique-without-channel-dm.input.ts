import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutChannelDmInput } from './message-update-without-channel-dm.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutChannelDmInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutChannelDmInput, {nullable:false})
    @Type(() => MessageUpdateWithoutChannelDmInput)
    data!: MessageUpdateWithoutChannelDmInput;
}

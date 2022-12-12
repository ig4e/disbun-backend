import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutChannelDmInput } from './message-update-without-channel-dm.input';
import { MessageCreateWithoutChannelDmInput } from './message-create-without-channel-dm.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutChannelDmInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutChannelDmInput, {nullable:false})
    @Type(() => MessageUpdateWithoutChannelDmInput)
    update!: MessageUpdateWithoutChannelDmInput;

    @Field(() => MessageCreateWithoutChannelDmInput, {nullable:false})
    @Type(() => MessageCreateWithoutChannelDmInput)
    create!: MessageCreateWithoutChannelDmInput;
}

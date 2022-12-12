import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutChannelDmInput } from './message-create-without-channel-dm.input';

@InputType()
export class MessageCreateOrConnectWithoutChannelDmInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutChannelDmInput, {nullable:false})
    @Type(() => MessageCreateWithoutChannelDmInput)
    create!: MessageCreateWithoutChannelDmInput;
}

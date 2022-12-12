import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutGroupChannelInput } from './message-create-without-group-channel.input';

@InputType()
export class MessageCreateOrConnectWithoutGroupChannelInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutGroupChannelInput, {nullable:false})
    @Type(() => MessageCreateWithoutGroupChannelInput)
    create!: MessageCreateWithoutGroupChannelInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { Type } from 'class-transformer';
import { ChannelCreateWithoutMessagesInput } from './channel-create-without-messages.input';

@InputType()
export class ChannelCreateOrConnectWithoutMessagesInput {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    @Type(() => ChannelWhereUniqueInput)
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelCreateWithoutMessagesInput, {nullable:false})
    @Type(() => ChannelCreateWithoutMessagesInput)
    create!: ChannelCreateWithoutMessagesInput;
}

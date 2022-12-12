import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutMessagesInput } from './channel-create-without-messages.input';
import { Type } from 'class-transformer';
import { ChannelCreateOrConnectWithoutMessagesInput } from './channel-create-or-connect-without-messages.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';

@InputType()
export class ChannelCreateNestedOneWithoutMessagesInput {

    @Field(() => ChannelCreateWithoutMessagesInput, {nullable:true})
    @Type(() => ChannelCreateWithoutMessagesInput)
    create?: ChannelCreateWithoutMessagesInput;

    @Field(() => ChannelCreateOrConnectWithoutMessagesInput, {nullable:true})
    @Type(() => ChannelCreateOrConnectWithoutMessagesInput)
    connectOrCreate?: ChannelCreateOrConnectWithoutMessagesInput;

    @Field(() => ChannelWhereUniqueInput, {nullable:true})
    @Type(() => ChannelWhereUniqueInput)
    connect?: ChannelWhereUniqueInput;
}

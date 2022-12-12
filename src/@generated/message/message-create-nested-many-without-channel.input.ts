import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutChannelInput } from './message-create-without-channel.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutChannelInput } from './message-create-or-connect-without-channel.input';
import { MessageCreateManyChannelInputEnvelope } from './message-create-many-channel-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateNestedManyWithoutChannelInput {

    @Field(() => [MessageCreateWithoutChannelInput], {nullable:true})
    @Type(() => MessageCreateWithoutChannelInput)
    create?: Array<MessageCreateWithoutChannelInput>;

    @Field(() => [MessageCreateOrConnectWithoutChannelInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutChannelInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutChannelInput>;

    @Field(() => MessageCreateManyChannelInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyChannelInputEnvelope)
    createMany?: MessageCreateManyChannelInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
}

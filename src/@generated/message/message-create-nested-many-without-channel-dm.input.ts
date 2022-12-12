import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutChannelDmInput } from './message-create-without-channel-dm.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutChannelDmInput } from './message-create-or-connect-without-channel-dm.input';
import { MessageCreateManyChannelDmInputEnvelope } from './message-create-many-channel-dm-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateNestedManyWithoutChannelDmInput {

    @Field(() => [MessageCreateWithoutChannelDmInput], {nullable:true})
    @Type(() => MessageCreateWithoutChannelDmInput)
    create?: Array<MessageCreateWithoutChannelDmInput>;

    @Field(() => [MessageCreateOrConnectWithoutChannelDmInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutChannelDmInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutChannelDmInput>;

    @Field(() => MessageCreateManyChannelDmInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyChannelDmInputEnvelope)
    createMany?: MessageCreateManyChannelDmInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
}

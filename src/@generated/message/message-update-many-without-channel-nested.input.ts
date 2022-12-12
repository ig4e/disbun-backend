import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutChannelInput } from './message-create-without-channel.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutChannelInput } from './message-create-or-connect-without-channel.input';
import { MessageUpsertWithWhereUniqueWithoutChannelInput } from './message-upsert-with-where-unique-without-channel.input';
import { MessageCreateManyChannelInputEnvelope } from './message-create-many-channel-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutChannelInput } from './message-update-with-where-unique-without-channel.input';
import { MessageUpdateManyWithWhereWithoutChannelInput } from './message-update-many-with-where-without-channel.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUpdateManyWithoutChannelNestedInput {

    @Field(() => [MessageCreateWithoutChannelInput], {nullable:true})
    @Type(() => MessageCreateWithoutChannelInput)
    create?: Array<MessageCreateWithoutChannelInput>;

    @Field(() => [MessageCreateOrConnectWithoutChannelInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutChannelInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutChannelInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutChannelInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutChannelInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutChannelInput>;

    @Field(() => MessageCreateManyChannelInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyChannelInputEnvelope)
    createMany?: MessageCreateManyChannelInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    set?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    disconnect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    delete?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutChannelInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutChannelInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutChannelInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutChannelInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutChannelInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutChannelInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}

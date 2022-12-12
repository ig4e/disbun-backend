import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutChannelDmInput } from './message-create-without-channel-dm.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutChannelDmInput } from './message-create-or-connect-without-channel-dm.input';
import { MessageUpsertWithWhereUniqueWithoutChannelDmInput } from './message-upsert-with-where-unique-without-channel-dm.input';
import { MessageCreateManyChannelDmInputEnvelope } from './message-create-many-channel-dm-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutChannelDmInput } from './message-update-with-where-unique-without-channel-dm.input';
import { MessageUpdateManyWithWhereWithoutChannelDmInput } from './message-update-many-with-where-without-channel-dm.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUpdateManyWithoutChannelDmNestedInput {

    @Field(() => [MessageCreateWithoutChannelDmInput], {nullable:true})
    @Type(() => MessageCreateWithoutChannelDmInput)
    create?: Array<MessageCreateWithoutChannelDmInput>;

    @Field(() => [MessageCreateOrConnectWithoutChannelDmInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutChannelDmInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutChannelDmInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutChannelDmInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutChannelDmInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutChannelDmInput>;

    @Field(() => MessageCreateManyChannelDmInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyChannelDmInputEnvelope)
    createMany?: MessageCreateManyChannelDmInputEnvelope;

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

    @Field(() => [MessageUpdateWithWhereUniqueWithoutChannelDmInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutChannelDmInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutChannelDmInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutChannelDmInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutChannelDmInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutChannelDmInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}

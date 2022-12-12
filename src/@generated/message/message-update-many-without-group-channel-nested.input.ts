import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutGroupChannelInput } from './message-create-without-group-channel.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutGroupChannelInput } from './message-create-or-connect-without-group-channel.input';
import { MessageUpsertWithWhereUniqueWithoutGroupChannelInput } from './message-upsert-with-where-unique-without-group-channel.input';
import { MessageCreateManyGroupChannelInputEnvelope } from './message-create-many-group-channel-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutGroupChannelInput } from './message-update-with-where-unique-without-group-channel.input';
import { MessageUpdateManyWithWhereWithoutGroupChannelInput } from './message-update-many-with-where-without-group-channel.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUpdateManyWithoutGroupChannelNestedInput {

    @Field(() => [MessageCreateWithoutGroupChannelInput], {nullable:true})
    @Type(() => MessageCreateWithoutGroupChannelInput)
    create?: Array<MessageCreateWithoutGroupChannelInput>;

    @Field(() => [MessageCreateOrConnectWithoutGroupChannelInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutGroupChannelInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutGroupChannelInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutGroupChannelInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutGroupChannelInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutGroupChannelInput>;

    @Field(() => MessageCreateManyGroupChannelInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyGroupChannelInputEnvelope)
    createMany?: MessageCreateManyGroupChannelInputEnvelope;

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

    @Field(() => [MessageUpdateWithWhereUniqueWithoutGroupChannelInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutGroupChannelInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutGroupChannelInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutGroupChannelInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutGroupChannelInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutGroupChannelInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}

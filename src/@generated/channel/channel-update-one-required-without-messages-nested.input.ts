import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutMessagesInput } from './channel-create-without-messages.input';
import { Type } from 'class-transformer';
import { ChannelCreateOrConnectWithoutMessagesInput } from './channel-create-or-connect-without-messages.input';
import { ChannelUpsertWithoutMessagesInput } from './channel-upsert-without-messages.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelUpdateWithoutMessagesInput } from './channel-update-without-messages.input';

@InputType()
export class ChannelUpdateOneRequiredWithoutMessagesNestedInput {

    @Field(() => ChannelCreateWithoutMessagesInput, {nullable:true})
    @Type(() => ChannelCreateWithoutMessagesInput)
    create?: ChannelCreateWithoutMessagesInput;

    @Field(() => ChannelCreateOrConnectWithoutMessagesInput, {nullable:true})
    @Type(() => ChannelCreateOrConnectWithoutMessagesInput)
    connectOrCreate?: ChannelCreateOrConnectWithoutMessagesInput;

    @Field(() => ChannelUpsertWithoutMessagesInput, {nullable:true})
    @Type(() => ChannelUpsertWithoutMessagesInput)
    upsert?: ChannelUpsertWithoutMessagesInput;

    @Field(() => ChannelWhereUniqueInput, {nullable:true})
    @Type(() => ChannelWhereUniqueInput)
    connect?: ChannelWhereUniqueInput;

    @Field(() => ChannelUpdateWithoutMessagesInput, {nullable:true})
    @Type(() => ChannelUpdateWithoutMessagesInput)
    update?: ChannelUpdateWithoutMessagesInput;
}

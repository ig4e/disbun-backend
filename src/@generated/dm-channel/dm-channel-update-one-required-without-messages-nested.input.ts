import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DmChannelCreateWithoutMessagesInput } from './dm-channel-create-without-messages.input';
import { Type } from 'class-transformer';
import { DmChannelCreateOrConnectWithoutMessagesInput } from './dm-channel-create-or-connect-without-messages.input';
import { DmChannelUpsertWithoutMessagesInput } from './dm-channel-upsert-without-messages.input';
import { DmChannelWhereUniqueInput } from './dm-channel-where-unique.input';
import { DmChannelUpdateWithoutMessagesInput } from './dm-channel-update-without-messages.input';

@InputType()
export class DmChannelUpdateOneRequiredWithoutMessagesNestedInput {

    @Field(() => DmChannelCreateWithoutMessagesInput, {nullable:true})
    @Type(() => DmChannelCreateWithoutMessagesInput)
    create?: DmChannelCreateWithoutMessagesInput;

    @Field(() => DmChannelCreateOrConnectWithoutMessagesInput, {nullable:true})
    @Type(() => DmChannelCreateOrConnectWithoutMessagesInput)
    connectOrCreate?: DmChannelCreateOrConnectWithoutMessagesInput;

    @Field(() => DmChannelUpsertWithoutMessagesInput, {nullable:true})
    @Type(() => DmChannelUpsertWithoutMessagesInput)
    upsert?: DmChannelUpsertWithoutMessagesInput;

    @Field(() => DmChannelWhereUniqueInput, {nullable:true})
    @Type(() => DmChannelWhereUniqueInput)
    connect?: DmChannelWhereUniqueInput;

    @Field(() => DmChannelUpdateWithoutMessagesInput, {nullable:true})
    @Type(() => DmChannelUpdateWithoutMessagesInput)
    update?: DmChannelUpdateWithoutMessagesInput;
}

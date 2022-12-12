import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DmChannelCreateWithoutMessagesInput } from './dm-channel-create-without-messages.input';
import { Type } from 'class-transformer';
import { DmChannelCreateOrConnectWithoutMessagesInput } from './dm-channel-create-or-connect-without-messages.input';
import { DmChannelWhereUniqueInput } from './dm-channel-where-unique.input';

@InputType()
export class DmChannelCreateNestedOneWithoutMessagesInput {

    @Field(() => DmChannelCreateWithoutMessagesInput, {nullable:true})
    @Type(() => DmChannelCreateWithoutMessagesInput)
    create?: DmChannelCreateWithoutMessagesInput;

    @Field(() => DmChannelCreateOrConnectWithoutMessagesInput, {nullable:true})
    @Type(() => DmChannelCreateOrConnectWithoutMessagesInput)
    connectOrCreate?: DmChannelCreateOrConnectWithoutMessagesInput;

    @Field(() => DmChannelWhereUniqueInput, {nullable:true})
    @Type(() => DmChannelWhereUniqueInput)
    connect?: DmChannelWhereUniqueInput;
}

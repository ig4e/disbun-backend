import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelDmCreateWithoutMessagesInput } from './channel-dm-create-without-messages.input';
import { Type } from 'class-transformer';
import { ChannelDmCreateOrConnectWithoutMessagesInput } from './channel-dm-create-or-connect-without-messages.input';
import { ChannelDmWhereUniqueInput } from './channel-dm-where-unique.input';

@InputType()
export class ChannelDmCreateNestedOneWithoutMessagesInput {

    @Field(() => ChannelDmCreateWithoutMessagesInput, {nullable:true})
    @Type(() => ChannelDmCreateWithoutMessagesInput)
    create?: ChannelDmCreateWithoutMessagesInput;

    @Field(() => ChannelDmCreateOrConnectWithoutMessagesInput, {nullable:true})
    @Type(() => ChannelDmCreateOrConnectWithoutMessagesInput)
    connectOrCreate?: ChannelDmCreateOrConnectWithoutMessagesInput;

    @Field(() => ChannelDmWhereUniqueInput, {nullable:true})
    @Type(() => ChannelDmWhereUniqueInput)
    connect?: ChannelDmWhereUniqueInput;
}

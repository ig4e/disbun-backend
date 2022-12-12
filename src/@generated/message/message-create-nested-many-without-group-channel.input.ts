import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutGroupChannelInput } from './message-create-without-group-channel.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutGroupChannelInput } from './message-create-or-connect-without-group-channel.input';
import { MessageCreateManyGroupChannelInputEnvelope } from './message-create-many-group-channel-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateNestedManyWithoutGroupChannelInput {

    @Field(() => [MessageCreateWithoutGroupChannelInput], {nullable:true})
    @Type(() => MessageCreateWithoutGroupChannelInput)
    create?: Array<MessageCreateWithoutGroupChannelInput>;

    @Field(() => [MessageCreateOrConnectWithoutGroupChannelInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutGroupChannelInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutGroupChannelInput>;

    @Field(() => MessageCreateManyGroupChannelInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyGroupChannelInputEnvelope)
    createMany?: MessageCreateManyGroupChannelInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
}

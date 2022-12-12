import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelDmWhereUniqueInput } from './channel-dm-where-unique.input';
import { Type } from 'class-transformer';
import { ChannelDmCreateWithoutMessagesInput } from './channel-dm-create-without-messages.input';

@InputType()
export class ChannelDmCreateOrConnectWithoutMessagesInput {

    @Field(() => ChannelDmWhereUniqueInput, {nullable:false})
    @Type(() => ChannelDmWhereUniqueInput)
    where!: ChannelDmWhereUniqueInput;

    @Field(() => ChannelDmCreateWithoutMessagesInput, {nullable:false})
    @Type(() => ChannelDmCreateWithoutMessagesInput)
    create!: ChannelDmCreateWithoutMessagesInput;
}

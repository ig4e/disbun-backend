import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DmChannelWhereUniqueInput } from './dm-channel-where-unique.input';
import { Type } from 'class-transformer';
import { DmChannelCreateWithoutMessagesInput } from './dm-channel-create-without-messages.input';

@InputType()
export class DmChannelCreateOrConnectWithoutMessagesInput {

    @Field(() => DmChannelWhereUniqueInput, {nullable:false})
    @Type(() => DmChannelWhereUniqueInput)
    where!: DmChannelWhereUniqueInput;

    @Field(() => DmChannelCreateWithoutMessagesInput, {nullable:false})
    @Type(() => DmChannelCreateWithoutMessagesInput)
    create!: DmChannelCreateWithoutMessagesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelUpdateWithoutMessagesInput } from './channel-update-without-messages.input';
import { Type } from 'class-transformer';
import { ChannelCreateWithoutMessagesInput } from './channel-create-without-messages.input';

@InputType()
export class ChannelUpsertWithoutMessagesInput {

    @Field(() => ChannelUpdateWithoutMessagesInput, {nullable:false})
    @Type(() => ChannelUpdateWithoutMessagesInput)
    update!: ChannelUpdateWithoutMessagesInput;

    @Field(() => ChannelCreateWithoutMessagesInput, {nullable:false})
    @Type(() => ChannelCreateWithoutMessagesInput)
    create!: ChannelCreateWithoutMessagesInput;
}

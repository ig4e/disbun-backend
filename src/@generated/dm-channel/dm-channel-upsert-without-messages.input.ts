import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DmChannelUpdateWithoutMessagesInput } from './dm-channel-update-without-messages.input';
import { Type } from 'class-transformer';
import { DmChannelCreateWithoutMessagesInput } from './dm-channel-create-without-messages.input';

@InputType()
export class DmChannelUpsertWithoutMessagesInput {

    @Field(() => DmChannelUpdateWithoutMessagesInput, {nullable:false})
    @Type(() => DmChannelUpdateWithoutMessagesInput)
    update!: DmChannelUpdateWithoutMessagesInput;

    @Field(() => DmChannelCreateWithoutMessagesInput, {nullable:false})
    @Type(() => DmChannelCreateWithoutMessagesInput)
    create!: DmChannelCreateWithoutMessagesInput;
}

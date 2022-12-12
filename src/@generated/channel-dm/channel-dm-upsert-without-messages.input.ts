import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelDmUpdateWithoutMessagesInput } from './channel-dm-update-without-messages.input';
import { Type } from 'class-transformer';
import { ChannelDmCreateWithoutMessagesInput } from './channel-dm-create-without-messages.input';

@InputType()
export class ChannelDmUpsertWithoutMessagesInput {

    @Field(() => ChannelDmUpdateWithoutMessagesInput, {nullable:false})
    @Type(() => ChannelDmUpdateWithoutMessagesInput)
    update!: ChannelDmUpdateWithoutMessagesInput;

    @Field(() => ChannelDmCreateWithoutMessagesInput, {nullable:false})
    @Type(() => ChannelDmCreateWithoutMessagesInput)
    create!: ChannelDmCreateWithoutMessagesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupChannelUpdateWithoutMessagesInput } from './group-channel-update-without-messages.input';
import { Type } from 'class-transformer';
import { GroupChannelCreateWithoutMessagesInput } from './group-channel-create-without-messages.input';

@InputType()
export class GroupChannelUpsertWithoutMessagesInput {

    @Field(() => GroupChannelUpdateWithoutMessagesInput, {nullable:false})
    @Type(() => GroupChannelUpdateWithoutMessagesInput)
    update!: GroupChannelUpdateWithoutMessagesInput;

    @Field(() => GroupChannelCreateWithoutMessagesInput, {nullable:false})
    @Type(() => GroupChannelCreateWithoutMessagesInput)
    create!: GroupChannelCreateWithoutMessagesInput;
}

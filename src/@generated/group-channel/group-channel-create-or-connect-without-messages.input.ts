import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupChannelWhereUniqueInput } from './group-channel-where-unique.input';
import { Type } from 'class-transformer';
import { GroupChannelCreateWithoutMessagesInput } from './group-channel-create-without-messages.input';

@InputType()
export class GroupChannelCreateOrConnectWithoutMessagesInput {

    @Field(() => GroupChannelWhereUniqueInput, {nullable:false})
    @Type(() => GroupChannelWhereUniqueInput)
    where!: GroupChannelWhereUniqueInput;

    @Field(() => GroupChannelCreateWithoutMessagesInput, {nullable:false})
    @Type(() => GroupChannelCreateWithoutMessagesInput)
    create!: GroupChannelCreateWithoutMessagesInput;
}

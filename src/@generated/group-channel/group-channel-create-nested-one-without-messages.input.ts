import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupChannelCreateWithoutMessagesInput } from './group-channel-create-without-messages.input';
import { Type } from 'class-transformer';
import { GroupChannelCreateOrConnectWithoutMessagesInput } from './group-channel-create-or-connect-without-messages.input';
import { GroupChannelWhereUniqueInput } from './group-channel-where-unique.input';

@InputType()
export class GroupChannelCreateNestedOneWithoutMessagesInput {

    @Field(() => GroupChannelCreateWithoutMessagesInput, {nullable:true})
    @Type(() => GroupChannelCreateWithoutMessagesInput)
    create?: GroupChannelCreateWithoutMessagesInput;

    @Field(() => GroupChannelCreateOrConnectWithoutMessagesInput, {nullable:true})
    @Type(() => GroupChannelCreateOrConnectWithoutMessagesInput)
    connectOrCreate?: GroupChannelCreateOrConnectWithoutMessagesInput;

    @Field(() => GroupChannelWhereUniqueInput, {nullable:true})
    @Type(() => GroupChannelWhereUniqueInput)
    connect?: GroupChannelWhereUniqueInput;
}

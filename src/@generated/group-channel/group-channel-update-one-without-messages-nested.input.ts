import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupChannelCreateWithoutMessagesInput } from './group-channel-create-without-messages.input';
import { Type } from 'class-transformer';
import { GroupChannelCreateOrConnectWithoutMessagesInput } from './group-channel-create-or-connect-without-messages.input';
import { GroupChannelUpsertWithoutMessagesInput } from './group-channel-upsert-without-messages.input';
import { GroupChannelWhereUniqueInput } from './group-channel-where-unique.input';
import { GroupChannelUpdateWithoutMessagesInput } from './group-channel-update-without-messages.input';

@InputType()
export class GroupChannelUpdateOneWithoutMessagesNestedInput {

    @Field(() => GroupChannelCreateWithoutMessagesInput, {nullable:true})
    @Type(() => GroupChannelCreateWithoutMessagesInput)
    create?: GroupChannelCreateWithoutMessagesInput;

    @Field(() => GroupChannelCreateOrConnectWithoutMessagesInput, {nullable:true})
    @Type(() => GroupChannelCreateOrConnectWithoutMessagesInput)
    connectOrCreate?: GroupChannelCreateOrConnectWithoutMessagesInput;

    @Field(() => GroupChannelUpsertWithoutMessagesInput, {nullable:true})
    @Type(() => GroupChannelUpsertWithoutMessagesInput)
    upsert?: GroupChannelUpsertWithoutMessagesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => GroupChannelWhereUniqueInput, {nullable:true})
    @Type(() => GroupChannelWhereUniqueInput)
    connect?: GroupChannelWhereUniqueInput;

    @Field(() => GroupChannelUpdateWithoutMessagesInput, {nullable:true})
    @Type(() => GroupChannelUpdateWithoutMessagesInput)
    update?: GroupChannelUpdateWithoutMessagesInput;
}

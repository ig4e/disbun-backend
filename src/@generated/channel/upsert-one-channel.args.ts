import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { Type } from 'class-transformer';
import { ChannelCreateInput } from './channel-create.input';
import { ChannelUpdateInput } from './channel-update.input';

@ArgsType()
export class UpsertOneChannelArgs {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    @Type(() => ChannelWhereUniqueInput)
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelCreateInput, {nullable:false})
    @Type(() => ChannelCreateInput)
    create!: ChannelCreateInput;

    @Field(() => ChannelUpdateInput, {nullable:false})
    @Type(() => ChannelUpdateInput)
    update!: ChannelUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelDmWhereUniqueInput } from './channel-dm-where-unique.input';
import { Type } from 'class-transformer';
import { ChannelDmCreateInput } from './channel-dm-create.input';
import { ChannelDmUpdateInput } from './channel-dm-update.input';

@ArgsType()
export class UpsertOneChannelDmArgs {

    @Field(() => ChannelDmWhereUniqueInput, {nullable:false})
    @Type(() => ChannelDmWhereUniqueInput)
    where!: ChannelDmWhereUniqueInput;

    @Field(() => ChannelDmCreateInput, {nullable:false})
    @Type(() => ChannelDmCreateInput)
    create!: ChannelDmCreateInput;

    @Field(() => ChannelDmUpdateInput, {nullable:false})
    @Type(() => ChannelDmUpdateInput)
    update!: ChannelDmUpdateInput;
}

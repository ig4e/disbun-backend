import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelDmUpdateInput } from './channel-dm-update.input';
import { Type } from 'class-transformer';
import { ChannelDmWhereUniqueInput } from './channel-dm-where-unique.input';

@ArgsType()
export class UpdateOneChannelDmArgs {

    @Field(() => ChannelDmUpdateInput, {nullable:false})
    @Type(() => ChannelDmUpdateInput)
    data!: ChannelDmUpdateInput;

    @Field(() => ChannelDmWhereUniqueInput, {nullable:false})
    @Type(() => ChannelDmWhereUniqueInput)
    where!: ChannelDmWhereUniqueInput;
}

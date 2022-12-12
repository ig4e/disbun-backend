import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DmChannelWhereUniqueInput } from './dm-channel-where-unique.input';
import { Type } from 'class-transformer';
import { DmChannelCreateInput } from './dm-channel-create.input';
import { DmChannelUpdateInput } from './dm-channel-update.input';

@ArgsType()
export class UpsertOneDmChannelArgs {

    @Field(() => DmChannelWhereUniqueInput, {nullable:false})
    @Type(() => DmChannelWhereUniqueInput)
    where!: DmChannelWhereUniqueInput;

    @Field(() => DmChannelCreateInput, {nullable:false})
    @Type(() => DmChannelCreateInput)
    create!: DmChannelCreateInput;

    @Field(() => DmChannelUpdateInput, {nullable:false})
    @Type(() => DmChannelUpdateInput)
    update!: DmChannelUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DmChannelUpdateInput } from './dm-channel-update.input';
import { Type } from 'class-transformer';
import { DmChannelWhereUniqueInput } from './dm-channel-where-unique.input';

@ArgsType()
export class UpdateOneDmChannelArgs {

    @Field(() => DmChannelUpdateInput, {nullable:false})
    @Type(() => DmChannelUpdateInput)
    data!: DmChannelUpdateInput;

    @Field(() => DmChannelWhereUniqueInput, {nullable:false})
    @Type(() => DmChannelWhereUniqueInput)
    where!: DmChannelWhereUniqueInput;
}

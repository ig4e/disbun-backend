import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DmChannelWhereUniqueInput } from './dm-channel-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDmChannelArgs {

    @Field(() => DmChannelWhereUniqueInput, {nullable:false})
    @Type(() => DmChannelWhereUniqueInput)
    where!: DmChannelWhereUniqueInput;
}

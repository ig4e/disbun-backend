import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DmChannelCreateInput } from './dm-channel-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDmChannelArgs {

    @Field(() => DmChannelCreateInput, {nullable:false})
    @Type(() => DmChannelCreateInput)
    data!: DmChannelCreateInput;
}

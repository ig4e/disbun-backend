import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelDmCreateInput } from './channel-dm-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneChannelDmArgs {

    @Field(() => ChannelDmCreateInput, {nullable:false})
    @Type(() => ChannelDmCreateInput)
    data!: ChannelDmCreateInput;
}

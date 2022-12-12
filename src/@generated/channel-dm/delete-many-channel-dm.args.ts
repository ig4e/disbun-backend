import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelDmWhereInput } from './channel-dm-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyChannelDmArgs {

    @Field(() => ChannelDmWhereInput, {nullable:true})
    @Type(() => ChannelDmWhereInput)
    where?: ChannelDmWhereInput;
}

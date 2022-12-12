import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DmChannelWhereInput } from './dm-channel-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDmChannelArgs {

    @Field(() => DmChannelWhereInput, {nullable:true})
    @Type(() => DmChannelWhereInput)
    where?: DmChannelWhereInput;
}

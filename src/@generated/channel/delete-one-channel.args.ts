import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneChannelArgs {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    @Type(() => ChannelWhereUniqueInput)
    where!: ChannelWhereUniqueInput;
}

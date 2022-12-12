import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelDmWhereUniqueInput } from './channel-dm-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueChannelDmOrThrowArgs {

    @Field(() => ChannelDmWhereUniqueInput, {nullable:false})
    @Type(() => ChannelDmWhereUniqueInput)
    where!: ChannelDmWhereUniqueInput;
}

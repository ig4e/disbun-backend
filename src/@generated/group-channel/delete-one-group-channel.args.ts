import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupChannelWhereUniqueInput } from './group-channel-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneGroupChannelArgs {

    @Field(() => GroupChannelWhereUniqueInput, {nullable:false})
    @Type(() => GroupChannelWhereUniqueInput)
    where!: GroupChannelWhereUniqueInput;
}

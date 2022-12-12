import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupChannelUpdateInput } from './group-channel-update.input';
import { Type } from 'class-transformer';
import { GroupChannelWhereUniqueInput } from './group-channel-where-unique.input';

@ArgsType()
export class UpdateOneGroupChannelArgs {

    @Field(() => GroupChannelUpdateInput, {nullable:false})
    @Type(() => GroupChannelUpdateInput)
    data!: GroupChannelUpdateInput;

    @Field(() => GroupChannelWhereUniqueInput, {nullable:false})
    @Type(() => GroupChannelWhereUniqueInput)
    where!: GroupChannelWhereUniqueInput;
}

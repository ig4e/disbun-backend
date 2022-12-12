import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupChannelWhereUniqueInput } from './group-channel-where-unique.input';
import { Type } from 'class-transformer';
import { GroupChannelCreateInput } from './group-channel-create.input';
import { GroupChannelUpdateInput } from './group-channel-update.input';

@ArgsType()
export class UpsertOneGroupChannelArgs {

    @Field(() => GroupChannelWhereUniqueInput, {nullable:false})
    @Type(() => GroupChannelWhereUniqueInput)
    where!: GroupChannelWhereUniqueInput;

    @Field(() => GroupChannelCreateInput, {nullable:false})
    @Type(() => GroupChannelCreateInput)
    create!: GroupChannelCreateInput;

    @Field(() => GroupChannelUpdateInput, {nullable:false})
    @Type(() => GroupChannelUpdateInput)
    update!: GroupChannelUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupChannelCreateInput } from './group-channel-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGroupChannelArgs {

    @Field(() => GroupChannelCreateInput, {nullable:false})
    @Type(() => GroupChannelCreateInput)
    data!: GroupChannelCreateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupChannelWhereInput } from './group-channel-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGroupChannelArgs {

    @Field(() => GroupChannelWhereInput, {nullable:true})
    @Type(() => GroupChannelWhereInput)
    where?: GroupChannelWhereInput;
}

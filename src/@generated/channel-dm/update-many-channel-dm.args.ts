import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelDmUpdateManyMutationInput } from './channel-dm-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ChannelDmWhereInput } from './channel-dm-where.input';

@ArgsType()
export class UpdateManyChannelDmArgs {

    @Field(() => ChannelDmUpdateManyMutationInput, {nullable:false})
    @Type(() => ChannelDmUpdateManyMutationInput)
    data!: ChannelDmUpdateManyMutationInput;

    @Field(() => ChannelDmWhereInput, {nullable:true})
    @Type(() => ChannelDmWhereInput)
    where?: ChannelDmWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DmChannelUpdateManyMutationInput } from './dm-channel-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DmChannelWhereInput } from './dm-channel-where.input';

@ArgsType()
export class UpdateManyDmChannelArgs {

    @Field(() => DmChannelUpdateManyMutationInput, {nullable:false})
    @Type(() => DmChannelUpdateManyMutationInput)
    data!: DmChannelUpdateManyMutationInput;

    @Field(() => DmChannelWhereInput, {nullable:true})
    @Type(() => DmChannelWhereInput)
    where?: DmChannelWhereInput;
}

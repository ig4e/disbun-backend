import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupChannelUpdateManyMutationInput } from './group-channel-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GroupChannelWhereInput } from './group-channel-where.input';

@ArgsType()
export class UpdateManyGroupChannelArgs {

    @Field(() => GroupChannelUpdateManyMutationInput, {nullable:false})
    @Type(() => GroupChannelUpdateManyMutationInput)
    data!: GroupChannelUpdateManyMutationInput;

    @Field(() => GroupChannelWhereInput, {nullable:true})
    @Type(() => GroupChannelWhereInput)
    where?: GroupChannelWhereInput;
}

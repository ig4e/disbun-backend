import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DmChannelCreateManyInput } from './dm-channel-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDmChannelArgs {

    @Field(() => [DmChannelCreateManyInput], {nullable:false})
    @Type(() => DmChannelCreateManyInput)
    data!: Array<DmChannelCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

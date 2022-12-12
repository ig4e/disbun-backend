import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelDmCreateManyInput } from './channel-dm-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyChannelDmArgs {

    @Field(() => [ChannelDmCreateManyInput], {nullable:false})
    @Type(() => ChannelDmCreateManyInput)
    data!: Array<ChannelDmCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

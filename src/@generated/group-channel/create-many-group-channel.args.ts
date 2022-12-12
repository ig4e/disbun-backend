import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupChannelCreateManyInput } from './group-channel-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGroupChannelArgs {

    @Field(() => [GroupChannelCreateManyInput], {nullable:false})
    @Type(() => GroupChannelCreateManyInput)
    data!: Array<GroupChannelCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

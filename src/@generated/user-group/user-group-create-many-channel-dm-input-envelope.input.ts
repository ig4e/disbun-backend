import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateManyChannelDmInput } from './user-group-create-many-channel-dm.input';
import { Type } from 'class-transformer';

@InputType()
export class UserGroupCreateManyChannelDmInputEnvelope {

    @Field(() => [UserGroupCreateManyChannelDmInput], {nullable:false})
    @Type(() => UserGroupCreateManyChannelDmInput)
    data!: Array<UserGroupCreateManyChannelDmInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

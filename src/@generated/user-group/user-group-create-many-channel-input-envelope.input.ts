import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateManyChannelInput } from './user-group-create-many-channel.input';
import { Type } from 'class-transformer';

@InputType()
export class UserGroupCreateManyChannelInputEnvelope {

    @Field(() => [UserGroupCreateManyChannelInput], {nullable:false})
    @Type(() => UserGroupCreateManyChannelInput)
    data!: Array<UserGroupCreateManyChannelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserGroupUpdateWithoutChannelInput } from './user-group-update-without-channel.input';

@InputType()
export class UserGroupUpdateWithWhereUniqueWithoutChannelInput {

    @Field(() => UserGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserGroupWhereUniqueInput)
    where!: UserGroupWhereUniqueInput;

    @Field(() => UserGroupUpdateWithoutChannelInput, {nullable:false})
    @Type(() => UserGroupUpdateWithoutChannelInput)
    data!: UserGroupUpdateWithoutChannelInput;
}

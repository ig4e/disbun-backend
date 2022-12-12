import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserGroupUpdateWithoutChannelDmInput } from './user-group-update-without-channel-dm.input';

@InputType()
export class UserGroupUpdateWithWhereUniqueWithoutChannelDmInput {

    @Field(() => UserGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserGroupWhereUniqueInput)
    where!: UserGroupWhereUniqueInput;

    @Field(() => UserGroupUpdateWithoutChannelDmInput, {nullable:false})
    @Type(() => UserGroupUpdateWithoutChannelDmInput)
    data!: UserGroupUpdateWithoutChannelDmInput;
}

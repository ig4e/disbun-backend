import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupChannelWhereUniqueInput } from './group-channel-where-unique.input';
import { Type } from 'class-transformer';
import { GroupChannelCreateWithoutGroupInput } from './group-channel-create-without-group.input';

@InputType()
export class GroupChannelCreateOrConnectWithoutGroupInput {

    @Field(() => GroupChannelWhereUniqueInput, {nullable:false})
    @Type(() => GroupChannelWhereUniqueInput)
    where!: GroupChannelWhereUniqueInput;

    @Field(() => GroupChannelCreateWithoutGroupInput, {nullable:false})
    @Type(() => GroupChannelCreateWithoutGroupInput)
    create!: GroupChannelCreateWithoutGroupInput;
}

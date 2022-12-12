import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupChannelCreateWithoutGroupInput } from './group-channel-create-without-group.input';
import { Type } from 'class-transformer';
import { GroupChannelCreateOrConnectWithoutGroupInput } from './group-channel-create-or-connect-without-group.input';
import { GroupChannelWhereUniqueInput } from './group-channel-where-unique.input';

@InputType()
export class GroupChannelUncheckedCreateNestedOneWithoutGroupInput {

    @Field(() => GroupChannelCreateWithoutGroupInput, {nullable:true})
    @Type(() => GroupChannelCreateWithoutGroupInput)
    create?: GroupChannelCreateWithoutGroupInput;

    @Field(() => GroupChannelCreateOrConnectWithoutGroupInput, {nullable:true})
    @Type(() => GroupChannelCreateOrConnectWithoutGroupInput)
    connectOrCreate?: GroupChannelCreateOrConnectWithoutGroupInput;

    @Field(() => GroupChannelWhereUniqueInput, {nullable:true})
    @Type(() => GroupChannelWhereUniqueInput)
    connect?: GroupChannelWhereUniqueInput;
}

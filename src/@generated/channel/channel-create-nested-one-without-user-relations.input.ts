import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutUserRelationsInput } from './channel-create-without-user-relations.input';
import { Type } from 'class-transformer';
import { ChannelCreateOrConnectWithoutUserRelationsInput } from './channel-create-or-connect-without-user-relations.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';

@InputType()
export class ChannelCreateNestedOneWithoutUserRelationsInput {

    @Field(() => ChannelCreateWithoutUserRelationsInput, {nullable:true})
    @Type(() => ChannelCreateWithoutUserRelationsInput)
    create?: ChannelCreateWithoutUserRelationsInput;

    @Field(() => ChannelCreateOrConnectWithoutUserRelationsInput, {nullable:true})
    @Type(() => ChannelCreateOrConnectWithoutUserRelationsInput)
    connectOrCreate?: ChannelCreateOrConnectWithoutUserRelationsInput;

    @Field(() => ChannelWhereUniqueInput, {nullable:true})
    @Type(() => ChannelWhereUniqueInput)
    connect?: ChannelWhereUniqueInput;
}

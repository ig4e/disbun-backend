import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelDmCreateWithoutUserRelationsInput } from './channel-dm-create-without-user-relations.input';
import { Type } from 'class-transformer';
import { ChannelDmCreateOrConnectWithoutUserRelationsInput } from './channel-dm-create-or-connect-without-user-relations.input';
import { ChannelDmWhereUniqueInput } from './channel-dm-where-unique.input';

@InputType()
export class ChannelDmCreateNestedOneWithoutUserRelationsInput {

    @Field(() => ChannelDmCreateWithoutUserRelationsInput, {nullable:true})
    @Type(() => ChannelDmCreateWithoutUserRelationsInput)
    create?: ChannelDmCreateWithoutUserRelationsInput;

    @Field(() => ChannelDmCreateOrConnectWithoutUserRelationsInput, {nullable:true})
    @Type(() => ChannelDmCreateOrConnectWithoutUserRelationsInput)
    connectOrCreate?: ChannelDmCreateOrConnectWithoutUserRelationsInput;

    @Field(() => ChannelDmWhereUniqueInput, {nullable:true})
    @Type(() => ChannelDmWhereUniqueInput)
    connect?: ChannelDmWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutUserRelationsInput } from './channel-create-without-user-relations.input';
import { Type } from 'class-transformer';
import { ChannelCreateOrConnectWithoutUserRelationsInput } from './channel-create-or-connect-without-user-relations.input';
import { ChannelUpsertWithoutUserRelationsInput } from './channel-upsert-without-user-relations.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelUpdateWithoutUserRelationsInput } from './channel-update-without-user-relations.input';

@InputType()
export class ChannelUpdateOneRequiredWithoutUserRelationsNestedInput {

    @Field(() => ChannelCreateWithoutUserRelationsInput, {nullable:true})
    @Type(() => ChannelCreateWithoutUserRelationsInput)
    create?: ChannelCreateWithoutUserRelationsInput;

    @Field(() => ChannelCreateOrConnectWithoutUserRelationsInput, {nullable:true})
    @Type(() => ChannelCreateOrConnectWithoutUserRelationsInput)
    connectOrCreate?: ChannelCreateOrConnectWithoutUserRelationsInput;

    @Field(() => ChannelUpsertWithoutUserRelationsInput, {nullable:true})
    @Type(() => ChannelUpsertWithoutUserRelationsInput)
    upsert?: ChannelUpsertWithoutUserRelationsInput;

    @Field(() => ChannelWhereUniqueInput, {nullable:true})
    @Type(() => ChannelWhereUniqueInput)
    connect?: ChannelWhereUniqueInput;

    @Field(() => ChannelUpdateWithoutUserRelationsInput, {nullable:true})
    @Type(() => ChannelUpdateWithoutUserRelationsInput)
    update?: ChannelUpdateWithoutUserRelationsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelDmCreateWithoutUserRelationsInput } from './channel-dm-create-without-user-relations.input';
import { Type } from 'class-transformer';
import { ChannelDmCreateOrConnectWithoutUserRelationsInput } from './channel-dm-create-or-connect-without-user-relations.input';
import { ChannelDmUpsertWithoutUserRelationsInput } from './channel-dm-upsert-without-user-relations.input';
import { ChannelDmWhereUniqueInput } from './channel-dm-where-unique.input';
import { ChannelDmUpdateWithoutUserRelationsInput } from './channel-dm-update-without-user-relations.input';

@InputType()
export class ChannelDmUpdateOneRequiredWithoutUserRelationsNestedInput {

    @Field(() => ChannelDmCreateWithoutUserRelationsInput, {nullable:true})
    @Type(() => ChannelDmCreateWithoutUserRelationsInput)
    create?: ChannelDmCreateWithoutUserRelationsInput;

    @Field(() => ChannelDmCreateOrConnectWithoutUserRelationsInput, {nullable:true})
    @Type(() => ChannelDmCreateOrConnectWithoutUserRelationsInput)
    connectOrCreate?: ChannelDmCreateOrConnectWithoutUserRelationsInput;

    @Field(() => ChannelDmUpsertWithoutUserRelationsInput, {nullable:true})
    @Type(() => ChannelDmUpsertWithoutUserRelationsInput)
    upsert?: ChannelDmUpsertWithoutUserRelationsInput;

    @Field(() => ChannelDmWhereUniqueInput, {nullable:true})
    @Type(() => ChannelDmWhereUniqueInput)
    connect?: ChannelDmWhereUniqueInput;

    @Field(() => ChannelDmUpdateWithoutUserRelationsInput, {nullable:true})
    @Type(() => ChannelDmUpdateWithoutUserRelationsInput)
    update?: ChannelDmUpdateWithoutUserRelationsInput;
}

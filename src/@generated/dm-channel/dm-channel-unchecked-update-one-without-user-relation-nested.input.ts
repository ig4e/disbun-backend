import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DmChannelCreateWithoutUserRelationInput } from './dm-channel-create-without-user-relation.input';
import { Type } from 'class-transformer';
import { DmChannelCreateOrConnectWithoutUserRelationInput } from './dm-channel-create-or-connect-without-user-relation.input';
import { DmChannelUpsertWithoutUserRelationInput } from './dm-channel-upsert-without-user-relation.input';
import { DmChannelWhereUniqueInput } from './dm-channel-where-unique.input';
import { DmChannelUpdateWithoutUserRelationInput } from './dm-channel-update-without-user-relation.input';

@InputType()
export class DmChannelUncheckedUpdateOneWithoutUserRelationNestedInput {

    @Field(() => DmChannelCreateWithoutUserRelationInput, {nullable:true})
    @Type(() => DmChannelCreateWithoutUserRelationInput)
    create?: DmChannelCreateWithoutUserRelationInput;

    @Field(() => DmChannelCreateOrConnectWithoutUserRelationInput, {nullable:true})
    @Type(() => DmChannelCreateOrConnectWithoutUserRelationInput)
    connectOrCreate?: DmChannelCreateOrConnectWithoutUserRelationInput;

    @Field(() => DmChannelUpsertWithoutUserRelationInput, {nullable:true})
    @Type(() => DmChannelUpsertWithoutUserRelationInput)
    upsert?: DmChannelUpsertWithoutUserRelationInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => DmChannelWhereUniqueInput, {nullable:true})
    @Type(() => DmChannelWhereUniqueInput)
    connect?: DmChannelWhereUniqueInput;

    @Field(() => DmChannelUpdateWithoutUserRelationInput, {nullable:true})
    @Type(() => DmChannelUpdateWithoutUserRelationInput)
    update?: DmChannelUpdateWithoutUserRelationInput;
}

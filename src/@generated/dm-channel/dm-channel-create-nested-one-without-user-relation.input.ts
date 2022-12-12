import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DmChannelCreateWithoutUserRelationInput } from './dm-channel-create-without-user-relation.input';
import { Type } from 'class-transformer';
import { DmChannelCreateOrConnectWithoutUserRelationInput } from './dm-channel-create-or-connect-without-user-relation.input';
import { DmChannelWhereUniqueInput } from './dm-channel-where-unique.input';

@InputType()
export class DmChannelCreateNestedOneWithoutUserRelationInput {

    @Field(() => DmChannelCreateWithoutUserRelationInput, {nullable:true})
    @Type(() => DmChannelCreateWithoutUserRelationInput)
    create?: DmChannelCreateWithoutUserRelationInput;

    @Field(() => DmChannelCreateOrConnectWithoutUserRelationInput, {nullable:true})
    @Type(() => DmChannelCreateOrConnectWithoutUserRelationInput)
    connectOrCreate?: DmChannelCreateOrConnectWithoutUserRelationInput;

    @Field(() => DmChannelWhereUniqueInput, {nullable:true})
    @Type(() => DmChannelWhereUniqueInput)
    connect?: DmChannelWhereUniqueInput;
}

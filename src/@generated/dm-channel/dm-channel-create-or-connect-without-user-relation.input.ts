import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DmChannelWhereUniqueInput } from './dm-channel-where-unique.input';
import { Type } from 'class-transformer';
import { DmChannelCreateWithoutUserRelationInput } from './dm-channel-create-without-user-relation.input';

@InputType()
export class DmChannelCreateOrConnectWithoutUserRelationInput {

    @Field(() => DmChannelWhereUniqueInput, {nullable:false})
    @Type(() => DmChannelWhereUniqueInput)
    where!: DmChannelWhereUniqueInput;

    @Field(() => DmChannelCreateWithoutUserRelationInput, {nullable:false})
    @Type(() => DmChannelCreateWithoutUserRelationInput)
    create!: DmChannelCreateWithoutUserRelationInput;
}

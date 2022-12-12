import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { Type } from 'class-transformer';
import { ChannelCreateWithoutUserRelationsInput } from './channel-create-without-user-relations.input';

@InputType()
export class ChannelCreateOrConnectWithoutUserRelationsInput {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    @Type(() => ChannelWhereUniqueInput)
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelCreateWithoutUserRelationsInput, {nullable:false})
    @Type(() => ChannelCreateWithoutUserRelationsInput)
    create!: ChannelCreateWithoutUserRelationsInput;
}

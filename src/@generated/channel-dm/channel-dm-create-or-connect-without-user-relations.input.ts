import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelDmWhereUniqueInput } from './channel-dm-where-unique.input';
import { Type } from 'class-transformer';
import { ChannelDmCreateWithoutUserRelationsInput } from './channel-dm-create-without-user-relations.input';

@InputType()
export class ChannelDmCreateOrConnectWithoutUserRelationsInput {

    @Field(() => ChannelDmWhereUniqueInput, {nullable:false})
    @Type(() => ChannelDmWhereUniqueInput)
    where!: ChannelDmWhereUniqueInput;

    @Field(() => ChannelDmCreateWithoutUserRelationsInput, {nullable:false})
    @Type(() => ChannelDmCreateWithoutUserRelationsInput)
    create!: ChannelDmCreateWithoutUserRelationsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelDmUpdateWithoutUserRelationsInput } from './channel-dm-update-without-user-relations.input';
import { Type } from 'class-transformer';
import { ChannelDmCreateWithoutUserRelationsInput } from './channel-dm-create-without-user-relations.input';

@InputType()
export class ChannelDmUpsertWithoutUserRelationsInput {

    @Field(() => ChannelDmUpdateWithoutUserRelationsInput, {nullable:false})
    @Type(() => ChannelDmUpdateWithoutUserRelationsInput)
    update!: ChannelDmUpdateWithoutUserRelationsInput;

    @Field(() => ChannelDmCreateWithoutUserRelationsInput, {nullable:false})
    @Type(() => ChannelDmCreateWithoutUserRelationsInput)
    create!: ChannelDmCreateWithoutUserRelationsInput;
}

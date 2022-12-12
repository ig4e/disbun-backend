import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelUpdateWithoutUserRelationsInput } from './channel-update-without-user-relations.input';
import { Type } from 'class-transformer';
import { ChannelCreateWithoutUserRelationsInput } from './channel-create-without-user-relations.input';

@InputType()
export class ChannelUpsertWithoutUserRelationsInput {

    @Field(() => ChannelUpdateWithoutUserRelationsInput, {nullable:false})
    @Type(() => ChannelUpdateWithoutUserRelationsInput)
    update!: ChannelUpdateWithoutUserRelationsInput;

    @Field(() => ChannelCreateWithoutUserRelationsInput, {nullable:false})
    @Type(() => ChannelCreateWithoutUserRelationsInput)
    create!: ChannelCreateWithoutUserRelationsInput;
}

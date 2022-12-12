import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DmChannelUpdateWithoutUserRelationInput } from './dm-channel-update-without-user-relation.input';
import { Type } from 'class-transformer';
import { DmChannelCreateWithoutUserRelationInput } from './dm-channel-create-without-user-relation.input';

@InputType()
export class DmChannelUpsertWithoutUserRelationInput {

    @Field(() => DmChannelUpdateWithoutUserRelationInput, {nullable:false})
    @Type(() => DmChannelUpdateWithoutUserRelationInput)
    update!: DmChannelUpdateWithoutUserRelationInput;

    @Field(() => DmChannelCreateWithoutUserRelationInput, {nullable:false})
    @Type(() => DmChannelCreateWithoutUserRelationInput)
    create!: DmChannelCreateWithoutUserRelationInput;
}

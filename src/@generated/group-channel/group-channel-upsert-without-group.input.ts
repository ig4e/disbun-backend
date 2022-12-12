import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupChannelUpdateWithoutGroupInput } from './group-channel-update-without-group.input';
import { Type } from 'class-transformer';
import { GroupChannelCreateWithoutGroupInput } from './group-channel-create-without-group.input';

@InputType()
export class GroupChannelUpsertWithoutGroupInput {

    @Field(() => GroupChannelUpdateWithoutGroupInput, {nullable:false})
    @Type(() => GroupChannelUpdateWithoutGroupInput)
    update!: GroupChannelUpdateWithoutGroupInput;

    @Field(() => GroupChannelCreateWithoutGroupInput, {nullable:false})
    @Type(() => GroupChannelCreateWithoutGroupInput)
    create!: GroupChannelCreateWithoutGroupInput;
}

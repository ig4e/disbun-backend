import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationUpdateWithoutChannelInput } from './user-relation-update-without-channel.input';
import { Type } from 'class-transformer';
import { UserRelationCreateWithoutChannelInput } from './user-relation-create-without-channel.input';

@InputType()
export class UserRelationUpsertWithoutChannelInput {

    @Field(() => UserRelationUpdateWithoutChannelInput, {nullable:false})
    @Type(() => UserRelationUpdateWithoutChannelInput)
    update!: UserRelationUpdateWithoutChannelInput;

    @Field(() => UserRelationCreateWithoutChannelInput, {nullable:false})
    @Type(() => UserRelationCreateWithoutChannelInput)
    create!: UserRelationCreateWithoutChannelInput;
}

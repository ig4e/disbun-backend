import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Type } from 'class-transformer';
import { UserRelationCreateWithoutChannelInput } from './user-relation-create-without-channel.input';

@InputType()
export class UserRelationCreateOrConnectWithoutChannelInput {

    @Field(() => UserRelationWhereUniqueInput, {nullable:false})
    @Type(() => UserRelationWhereUniqueInput)
    where!: UserRelationWhereUniqueInput;

    @Field(() => UserRelationCreateWithoutChannelInput, {nullable:false})
    @Type(() => UserRelationCreateWithoutChannelInput)
    create!: UserRelationCreateWithoutChannelInput;
}

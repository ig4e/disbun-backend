import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateWithoutChannelInput } from './user-relation-create-without-channel.input';
import { Type } from 'class-transformer';
import { UserRelationCreateOrConnectWithoutChannelInput } from './user-relation-create-or-connect-without-channel.input';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';

@InputType()
export class UserRelationCreateNestedOneWithoutChannelInput {

    @Field(() => UserRelationCreateWithoutChannelInput, {nullable:true})
    @Type(() => UserRelationCreateWithoutChannelInput)
    create?: UserRelationCreateWithoutChannelInput;

    @Field(() => UserRelationCreateOrConnectWithoutChannelInput, {nullable:true})
    @Type(() => UserRelationCreateOrConnectWithoutChannelInput)
    connectOrCreate?: UserRelationCreateOrConnectWithoutChannelInput;

    @Field(() => UserRelationWhereUniqueInput, {nullable:true})
    @Type(() => UserRelationWhereUniqueInput)
    connect?: UserRelationWhereUniqueInput;
}

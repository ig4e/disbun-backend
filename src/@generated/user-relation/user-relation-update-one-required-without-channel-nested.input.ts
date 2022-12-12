import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateWithoutChannelInput } from './user-relation-create-without-channel.input';
import { Type } from 'class-transformer';
import { UserRelationCreateOrConnectWithoutChannelInput } from './user-relation-create-or-connect-without-channel.input';
import { UserRelationUpsertWithoutChannelInput } from './user-relation-upsert-without-channel.input';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { UserRelationUpdateWithoutChannelInput } from './user-relation-update-without-channel.input';

@InputType()
export class UserRelationUpdateOneRequiredWithoutChannelNestedInput {

    @Field(() => UserRelationCreateWithoutChannelInput, {nullable:true})
    @Type(() => UserRelationCreateWithoutChannelInput)
    create?: UserRelationCreateWithoutChannelInput;

    @Field(() => UserRelationCreateOrConnectWithoutChannelInput, {nullable:true})
    @Type(() => UserRelationCreateOrConnectWithoutChannelInput)
    connectOrCreate?: UserRelationCreateOrConnectWithoutChannelInput;

    @Field(() => UserRelationUpsertWithoutChannelInput, {nullable:true})
    @Type(() => UserRelationUpsertWithoutChannelInput)
    upsert?: UserRelationUpsertWithoutChannelInput;

    @Field(() => UserRelationWhereUniqueInput, {nullable:true})
    @Type(() => UserRelationWhereUniqueInput)
    connect?: UserRelationWhereUniqueInput;

    @Field(() => UserRelationUpdateWithoutChannelInput, {nullable:true})
    @Type(() => UserRelationUpdateWithoutChannelInput)
    update?: UserRelationUpdateWithoutChannelInput;
}

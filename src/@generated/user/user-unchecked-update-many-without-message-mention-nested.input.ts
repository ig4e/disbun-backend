import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMessageMentionInput } from './user-create-without-message-mention.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMessageMentionInput } from './user-create-or-connect-without-message-mention.input';
import { UserUpsertWithWhereUniqueWithoutMessageMentionInput } from './user-upsert-with-where-unique-without-message-mention.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutMessageMentionInput } from './user-update-with-where-unique-without-message-mention.input';
import { UserUpdateManyWithWhereWithoutMessageMentionInput } from './user-update-many-with-where-without-message-mention.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutMessageMentionNestedInput {

    @Field(() => [UserCreateWithoutMessageMentionInput], {nullable:true})
    @Type(() => UserCreateWithoutMessageMentionInput)
    create?: Array<UserCreateWithoutMessageMentionInput>;

    @Field(() => [UserCreateOrConnectWithoutMessageMentionInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMessageMentionInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutMessageMentionInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutMessageMentionInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutMessageMentionInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutMessageMentionInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutMessageMentionInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutMessageMentionInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutMessageMentionInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutMessageMentionInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutMessageMentionInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutMessageMentionInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

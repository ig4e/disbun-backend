import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMessageReactionInput } from './user-create-without-message-reaction.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMessageReactionInput } from './user-create-or-connect-without-message-reaction.input';
import { UserUpsertWithWhereUniqueWithoutMessageReactionInput } from './user-upsert-with-where-unique-without-message-reaction.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutMessageReactionInput } from './user-update-with-where-unique-without-message-reaction.input';
import { UserUpdateManyWithWhereWithoutMessageReactionInput } from './user-update-many-with-where-without-message-reaction.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutMessageReactionNestedInput {

    @Field(() => [UserCreateWithoutMessageReactionInput], {nullable:true})
    @Type(() => UserCreateWithoutMessageReactionInput)
    create?: Array<UserCreateWithoutMessageReactionInput>;

    @Field(() => [UserCreateOrConnectWithoutMessageReactionInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMessageReactionInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutMessageReactionInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutMessageReactionInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutMessageReactionInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutMessageReactionInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutMessageReactionInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutMessageReactionInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutMessageReactionInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutMessageReactionInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutMessageReactionInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutMessageReactionInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMessageReactionsInput } from './user-create-without-message-reactions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMessageReactionsInput } from './user-create-or-connect-without-message-reactions.input';
import { UserUpsertWithWhereUniqueWithoutMessageReactionsInput } from './user-upsert-with-where-unique-without-message-reactions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutMessageReactionsInput } from './user-update-with-where-unique-without-message-reactions.input';
import { UserUpdateManyWithWhereWithoutMessageReactionsInput } from './user-update-many-with-where-without-message-reactions.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutMessageReactionsNestedInput {

    @Field(() => [UserCreateWithoutMessageReactionsInput], {nullable:true})
    @Type(() => UserCreateWithoutMessageReactionsInput)
    create?: Array<UserCreateWithoutMessageReactionsInput>;

    @Field(() => [UserCreateOrConnectWithoutMessageReactionsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMessageReactionsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutMessageReactionsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutMessageReactionsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutMessageReactionsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutMessageReactionsInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutMessageReactionsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutMessageReactionsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutMessageReactionsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutMessageReactionsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutMessageReactionsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutMessageReactionsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

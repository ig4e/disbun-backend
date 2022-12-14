import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMessageReactionsInput } from './user-create-without-message-reactions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMessageReactionsInput } from './user-create-or-connect-without-message-reactions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutMessageReactionsInput {

    @Field(() => [UserCreateWithoutMessageReactionsInput], {nullable:true})
    @Type(() => UserCreateWithoutMessageReactionsInput)
    create?: Array<UserCreateWithoutMessageReactionsInput>;

    @Field(() => [UserCreateOrConnectWithoutMessageReactionsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMessageReactionsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutMessageReactionsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}

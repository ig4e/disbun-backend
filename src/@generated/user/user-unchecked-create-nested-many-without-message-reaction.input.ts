import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMessageReactionInput } from './user-create-without-message-reaction.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMessageReactionInput } from './user-create-or-connect-without-message-reaction.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutMessageReactionInput {

    @Field(() => [UserCreateWithoutMessageReactionInput], {nullable:true})
    @Type(() => UserCreateWithoutMessageReactionInput)
    create?: Array<UserCreateWithoutMessageReactionInput>;

    @Field(() => [UserCreateOrConnectWithoutMessageReactionInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMessageReactionInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutMessageReactionInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}

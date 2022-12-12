import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMessageReactionInput } from './user-create-without-message-reaction.input';

@InputType()
export class UserCreateOrConnectWithoutMessageReactionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMessageReactionInput, {nullable:false})
    @Type(() => UserCreateWithoutMessageReactionInput)
    create!: UserCreateWithoutMessageReactionInput;
}

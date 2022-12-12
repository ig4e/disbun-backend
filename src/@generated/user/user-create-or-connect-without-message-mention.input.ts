import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMessageMentionInput } from './user-create-without-message-mention.input';

@InputType()
export class UserCreateOrConnectWithoutMessageMentionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMessageMentionInput, {nullable:false})
    @Type(() => UserCreateWithoutMessageMentionInput)
    create!: UserCreateWithoutMessageMentionInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMessageMentionInput } from './user-update-without-message-mention.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutMessageMentionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMessageMentionInput, {nullable:false})
    @Type(() => UserUpdateWithoutMessageMentionInput)
    data!: UserUpdateWithoutMessageMentionInput;
}

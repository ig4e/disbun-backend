import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMessageMentionInput } from './user-create-without-message-mention.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMessageMentionInput } from './user-create-or-connect-without-message-mention.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutMessageMentionInput {

    @Field(() => [UserCreateWithoutMessageMentionInput], {nullable:true})
    @Type(() => UserCreateWithoutMessageMentionInput)
    create?: Array<UserCreateWithoutMessageMentionInput>;

    @Field(() => [UserCreateOrConnectWithoutMessageMentionInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMessageMentionInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutMessageMentionInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}

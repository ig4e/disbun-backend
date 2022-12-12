import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutGroupsInput } from './user-create-without-groups.input';

@InputType()
export class UserCreateOrConnectWithoutGroupsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutGroupsInput, {nullable:false})
    @Type(() => UserCreateWithoutGroupsInput)
    create!: UserCreateWithoutGroupsInput;
}

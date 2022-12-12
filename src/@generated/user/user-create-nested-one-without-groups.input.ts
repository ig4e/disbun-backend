import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGroupsInput } from './user-create-without-groups.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGroupsInput } from './user-create-or-connect-without-groups.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutGroupsInput {

    @Field(() => UserCreateWithoutGroupsInput, {nullable:true})
    @Type(() => UserCreateWithoutGroupsInput)
    create?: UserCreateWithoutGroupsInput;

    @Field(() => UserCreateOrConnectWithoutGroupsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGroupsInput)
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}

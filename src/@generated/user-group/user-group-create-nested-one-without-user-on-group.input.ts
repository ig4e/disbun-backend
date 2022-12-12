import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutUserOnGroupInput } from './user-group-create-without-user-on-group.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutUserOnGroupInput } from './user-group-create-or-connect-without-user-on-group.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';

@InputType()
export class UserGroupCreateNestedOneWithoutUserOnGroupInput {

    @Field(() => UserGroupCreateWithoutUserOnGroupInput, {nullable:true})
    @Type(() => UserGroupCreateWithoutUserOnGroupInput)
    create?: UserGroupCreateWithoutUserOnGroupInput;

    @Field(() => UserGroupCreateOrConnectWithoutUserOnGroupInput, {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutUserOnGroupInput)
    connectOrCreate?: UserGroupCreateOrConnectWithoutUserOnGroupInput;

    @Field(() => UserGroupWhereUniqueInput, {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    connect?: UserGroupWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutUserOnGroupInput } from './user-group-create-without-user-on-group.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutUserOnGroupInput } from './user-group-create-or-connect-without-user-on-group.input';
import { UserGroupUpsertWithoutUserOnGroupInput } from './user-group-upsert-without-user-on-group.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { UserGroupUpdateWithoutUserOnGroupInput } from './user-group-update-without-user-on-group.input';

@InputType()
export class UserGroupUpdateOneRequiredWithoutUserOnGroupNestedInput {

    @Field(() => UserGroupCreateWithoutUserOnGroupInput, {nullable:true})
    @Type(() => UserGroupCreateWithoutUserOnGroupInput)
    create?: UserGroupCreateWithoutUserOnGroupInput;

    @Field(() => UserGroupCreateOrConnectWithoutUserOnGroupInput, {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutUserOnGroupInput)
    connectOrCreate?: UserGroupCreateOrConnectWithoutUserOnGroupInput;

    @Field(() => UserGroupUpsertWithoutUserOnGroupInput, {nullable:true})
    @Type(() => UserGroupUpsertWithoutUserOnGroupInput)
    upsert?: UserGroupUpsertWithoutUserOnGroupInput;

    @Field(() => UserGroupWhereUniqueInput, {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    connect?: UserGroupWhereUniqueInput;

    @Field(() => UserGroupUpdateWithoutUserOnGroupInput, {nullable:true})
    @Type(() => UserGroupUpdateWithoutUserOnGroupInput)
    update?: UserGroupUpdateWithoutUserOnGroupInput;
}

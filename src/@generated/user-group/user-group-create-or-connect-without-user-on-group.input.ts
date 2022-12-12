import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserGroupCreateWithoutUserOnGroupInput } from './user-group-create-without-user-on-group.input';

@InputType()
export class UserGroupCreateOrConnectWithoutUserOnGroupInput {

    @Field(() => UserGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserGroupWhereUniqueInput)
    where!: UserGroupWhereUniqueInput;

    @Field(() => UserGroupCreateWithoutUserOnGroupInput, {nullable:false})
    @Type(() => UserGroupCreateWithoutUserOnGroupInput)
    create!: UserGroupCreateWithoutUserOnGroupInput;
}

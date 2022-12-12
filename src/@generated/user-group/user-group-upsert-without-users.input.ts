import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupUpdateWithoutUsersInput } from './user-group-update-without-users.input';
import { Type } from 'class-transformer';
import { UserGroupCreateWithoutUsersInput } from './user-group-create-without-users.input';

@InputType()
export class UserGroupUpsertWithoutUsersInput {

    @Field(() => UserGroupUpdateWithoutUsersInput, {nullable:false})
    @Type(() => UserGroupUpdateWithoutUsersInput)
    update!: UserGroupUpdateWithoutUsersInput;

    @Field(() => UserGroupCreateWithoutUsersInput, {nullable:false})
    @Type(() => UserGroupCreateWithoutUsersInput)
    create!: UserGroupCreateWithoutUsersInput;
}

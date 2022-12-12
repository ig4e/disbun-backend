import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutGroupsInput } from './user-update-without-groups.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutGroupsInput } from './user-create-without-groups.input';

@InputType()
export class UserUpsertWithoutGroupsInput {

    @Field(() => UserUpdateWithoutGroupsInput, {nullable:false})
    @Type(() => UserUpdateWithoutGroupsInput)
    update!: UserUpdateWithoutGroupsInput;

    @Field(() => UserCreateWithoutGroupsInput, {nullable:false})
    @Type(() => UserCreateWithoutGroupsInput)
    create!: UserCreateWithoutGroupsInput;
}

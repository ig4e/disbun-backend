import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserSideRelationsInput } from './user-update-without-user-side-relations.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserSideRelationsInput } from './user-create-without-user-side-relations.input';

@InputType()
export class UserUpsertWithoutUserSideRelationsInput {

    @Field(() => UserUpdateWithoutUserSideRelationsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserSideRelationsInput)
    update!: UserUpdateWithoutUserSideRelationsInput;

    @Field(() => UserCreateWithoutUserSideRelationsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserSideRelationsInput)
    create!: UserCreateWithoutUserSideRelationsInput;
}

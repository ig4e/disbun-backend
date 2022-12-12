import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserRelationsInput } from './user-update-without-user-relations.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserRelationsInput } from './user-create-without-user-relations.input';

@InputType()
export class UserUpsertWithoutUserRelationsInput {

    @Field(() => UserUpdateWithoutUserRelationsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserRelationsInput)
    update!: UserUpdateWithoutUserRelationsInput;

    @Field(() => UserCreateWithoutUserRelationsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserRelationsInput)
    create!: UserCreateWithoutUserRelationsInput;
}

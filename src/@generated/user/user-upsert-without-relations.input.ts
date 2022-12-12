import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRelationsInput } from './user-update-without-relations.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRelationsInput } from './user-create-without-relations.input';

@InputType()
export class UserUpsertWithoutRelationsInput {

    @Field(() => UserUpdateWithoutRelationsInput, {nullable:false})
    @Type(() => UserUpdateWithoutRelationsInput)
    update!: UserUpdateWithoutRelationsInput;

    @Field(() => UserCreateWithoutRelationsInput, {nullable:false})
    @Type(() => UserCreateWithoutRelationsInput)
    create!: UserCreateWithoutRelationsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutImageInput } from './user-update-without-image.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutImageInput } from './user-create-without-image.input';

@InputType()
export class UserUpsertWithoutImageInput {

    @Field(() => UserUpdateWithoutImageInput, {nullable:false})
    @Type(() => UserUpdateWithoutImageInput)
    update!: UserUpdateWithoutImageInput;

    @Field(() => UserCreateWithoutImageInput, {nullable:false})
    @Type(() => UserCreateWithoutImageInput)
    create!: UserCreateWithoutImageInput;
}

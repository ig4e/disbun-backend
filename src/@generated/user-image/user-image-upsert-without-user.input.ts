import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserImageUpdateWithoutUserInput } from './user-image-update-without-user.input';
import { Type } from 'class-transformer';
import { UserImageCreateWithoutUserInput } from './user-image-create-without-user.input';

@InputType()
export class UserImageUpsertWithoutUserInput {

    @Field(() => UserImageUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserImageUpdateWithoutUserInput)
    update!: UserImageUpdateWithoutUserInput;

    @Field(() => UserImageCreateWithoutUserInput, {nullable:false})
    @Type(() => UserImageCreateWithoutUserInput)
    create!: UserImageCreateWithoutUserInput;
}

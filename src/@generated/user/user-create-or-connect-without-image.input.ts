import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutImageInput } from './user-create-without-image.input';

@InputType()
export class UserCreateOrConnectWithoutImageInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutImageInput, {nullable:false})
    @Type(() => UserCreateWithoutImageInput)
    create!: UserCreateWithoutImageInput;
}

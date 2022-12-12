import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutImageInput } from './user-create-without-image.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutImageInput } from './user-create-or-connect-without-image.input';
import { UserUpsertWithoutImageInput } from './user-upsert-without-image.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutImageInput } from './user-update-without-image.input';

@InputType()
export class UserUpdateOneRequiredWithoutImageNestedInput {

    @Field(() => UserCreateWithoutImageInput, {nullable:true})
    @Type(() => UserCreateWithoutImageInput)
    create?: UserCreateWithoutImageInput;

    @Field(() => UserCreateOrConnectWithoutImageInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutImageInput)
    connectOrCreate?: UserCreateOrConnectWithoutImageInput;

    @Field(() => UserUpsertWithoutImageInput, {nullable:true})
    @Type(() => UserUpsertWithoutImageInput)
    upsert?: UserUpsertWithoutImageInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutImageInput, {nullable:true})
    @Type(() => UserUpdateWithoutImageInput)
    update?: UserUpdateWithoutImageInput;
}

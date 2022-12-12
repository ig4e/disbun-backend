import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutImageInput } from './user-create-without-image.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutImageInput } from './user-create-or-connect-without-image.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutImageInput {

    @Field(() => UserCreateWithoutImageInput, {nullable:true})
    @Type(() => UserCreateWithoutImageInput)
    create?: UserCreateWithoutImageInput;

    @Field(() => UserCreateOrConnectWithoutImageInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutImageInput)
    connectOrCreate?: UserCreateOrConnectWithoutImageInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}

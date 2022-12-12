import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserImageCreateWithoutUserInput } from './user-image-create-without-user.input';
import { Type } from 'class-transformer';
import { UserImageCreateOrConnectWithoutUserInput } from './user-image-create-or-connect-without-user.input';
import { UserImageWhereUniqueInput } from './user-image-where-unique.input';

@InputType()
export class UserImageUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => UserImageCreateWithoutUserInput, {nullable:true})
    @Type(() => UserImageCreateWithoutUserInput)
    create?: UserImageCreateWithoutUserInput;

    @Field(() => UserImageCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => UserImageCreateOrConnectWithoutUserInput)
    connectOrCreate?: UserImageCreateOrConnectWithoutUserInput;

    @Field(() => UserImageWhereUniqueInput, {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    connect?: UserImageWhereUniqueInput;
}

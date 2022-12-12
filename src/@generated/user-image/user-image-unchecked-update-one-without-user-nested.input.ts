import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserImageCreateWithoutUserInput } from './user-image-create-without-user.input';
import { Type } from 'class-transformer';
import { UserImageCreateOrConnectWithoutUserInput } from './user-image-create-or-connect-without-user.input';
import { UserImageUpsertWithoutUserInput } from './user-image-upsert-without-user.input';
import { UserImageWhereUniqueInput } from './user-image-where-unique.input';
import { UserImageUpdateWithoutUserInput } from './user-image-update-without-user.input';

@InputType()
export class UserImageUncheckedUpdateOneWithoutUserNestedInput {

    @Field(() => UserImageCreateWithoutUserInput, {nullable:true})
    @Type(() => UserImageCreateWithoutUserInput)
    create?: UserImageCreateWithoutUserInput;

    @Field(() => UserImageCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => UserImageCreateOrConnectWithoutUserInput)
    connectOrCreate?: UserImageCreateOrConnectWithoutUserInput;

    @Field(() => UserImageUpsertWithoutUserInput, {nullable:true})
    @Type(() => UserImageUpsertWithoutUserInput)
    upsert?: UserImageUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserImageWhereUniqueInput, {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    connect?: UserImageWhereUniqueInput;

    @Field(() => UserImageUpdateWithoutUserInput, {nullable:true})
    @Type(() => UserImageUpdateWithoutUserInput)
    update?: UserImageUpdateWithoutUserInput;
}

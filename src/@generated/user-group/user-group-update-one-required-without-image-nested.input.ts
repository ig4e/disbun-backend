import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupCreateWithoutImageInput } from './user-group-create-without-image.input';
import { Type } from 'class-transformer';
import { UserGroupCreateOrConnectWithoutImageInput } from './user-group-create-or-connect-without-image.input';
import { UserGroupUpsertWithoutImageInput } from './user-group-upsert-without-image.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { UserGroupUpdateWithoutImageInput } from './user-group-update-without-image.input';

@InputType()
export class UserGroupUpdateOneRequiredWithoutImageNestedInput {

    @Field(() => UserGroupCreateWithoutImageInput, {nullable:true})
    @Type(() => UserGroupCreateWithoutImageInput)
    create?: UserGroupCreateWithoutImageInput;

    @Field(() => UserGroupCreateOrConnectWithoutImageInput, {nullable:true})
    @Type(() => UserGroupCreateOrConnectWithoutImageInput)
    connectOrCreate?: UserGroupCreateOrConnectWithoutImageInput;

    @Field(() => UserGroupUpsertWithoutImageInput, {nullable:true})
    @Type(() => UserGroupUpsertWithoutImageInput)
    upsert?: UserGroupUpsertWithoutImageInput;

    @Field(() => UserGroupWhereUniqueInput, {nullable:true})
    @Type(() => UserGroupWhereUniqueInput)
    connect?: UserGroupWhereUniqueInput;

    @Field(() => UserGroupUpdateWithoutImageInput, {nullable:true})
    @Type(() => UserGroupUpdateWithoutImageInput)
    update?: UserGroupUpdateWithoutImageInput;
}

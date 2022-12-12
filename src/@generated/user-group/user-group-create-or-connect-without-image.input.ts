import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserGroupCreateWithoutImageInput } from './user-group-create-without-image.input';

@InputType()
export class UserGroupCreateOrConnectWithoutImageInput {

    @Field(() => UserGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserGroupWhereUniqueInput)
    where!: UserGroupWhereUniqueInput;

    @Field(() => UserGroupCreateWithoutImageInput, {nullable:false})
    @Type(() => UserGroupCreateWithoutImageInput)
    create!: UserGroupCreateWithoutImageInput;
}

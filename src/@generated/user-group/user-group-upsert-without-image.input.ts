import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupUpdateWithoutImageInput } from './user-group-update-without-image.input';
import { Type } from 'class-transformer';
import { UserGroupCreateWithoutImageInput } from './user-group-create-without-image.input';

@InputType()
export class UserGroupUpsertWithoutImageInput {

    @Field(() => UserGroupUpdateWithoutImageInput, {nullable:false})
    @Type(() => UserGroupUpdateWithoutImageInput)
    update!: UserGroupUpdateWithoutImageInput;

    @Field(() => UserGroupCreateWithoutImageInput, {nullable:false})
    @Type(() => UserGroupCreateWithoutImageInput)
    create!: UserGroupCreateWithoutImageInput;
}

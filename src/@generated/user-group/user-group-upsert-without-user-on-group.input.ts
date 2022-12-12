import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupUpdateWithoutUserOnGroupInput } from './user-group-update-without-user-on-group.input';
import { Type } from 'class-transformer';
import { UserGroupCreateWithoutUserOnGroupInput } from './user-group-create-without-user-on-group.input';

@InputType()
export class UserGroupUpsertWithoutUserOnGroupInput {

    @Field(() => UserGroupUpdateWithoutUserOnGroupInput, {nullable:false})
    @Type(() => UserGroupUpdateWithoutUserOnGroupInput)
    update!: UserGroupUpdateWithoutUserOnGroupInput;

    @Field(() => UserGroupCreateWithoutUserOnGroupInput, {nullable:false})
    @Type(() => UserGroupCreateWithoutUserOnGroupInput)
    create!: UserGroupCreateWithoutUserOnGroupInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { Type } from 'class-transformer';
import { UserGroupCreateInput } from './user-group-create.input';
import { UserGroupUpdateInput } from './user-group-update.input';

@ArgsType()
export class UpsertOneUserGroupArgs {

    @Field(() => UserGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserGroupWhereUniqueInput)
    where!: UserGroupWhereUniqueInput;

    @Field(() => UserGroupCreateInput, {nullable:false})
    @Type(() => UserGroupCreateInput)
    create!: UserGroupCreateInput;

    @Field(() => UserGroupUpdateInput, {nullable:false})
    @Type(() => UserGroupUpdateInput)
    update!: UserGroupUpdateInput;
}

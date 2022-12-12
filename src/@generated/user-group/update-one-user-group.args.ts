import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserGroupUpdateInput } from './user-group-update.input';
import { Type } from 'class-transformer';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';

@ArgsType()
export class UpdateOneUserGroupArgs {

    @Field(() => UserGroupUpdateInput, {nullable:false})
    @Type(() => UserGroupUpdateInput)
    data!: UserGroupUpdateInput;

    @Field(() => UserGroupWhereUniqueInput, {nullable:false})
    @Type(() => UserGroupWhereUniqueInput)
    where!: UserGroupWhereUniqueInput;
}

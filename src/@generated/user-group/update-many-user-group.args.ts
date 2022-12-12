import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserGroupUpdateManyMutationInput } from './user-group-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserGroupWhereInput } from './user-group-where.input';

@ArgsType()
export class UpdateManyUserGroupArgs {

    @Field(() => UserGroupUpdateManyMutationInput, {nullable:false})
    @Type(() => UserGroupUpdateManyMutationInput)
    data!: UserGroupUpdateManyMutationInput;

    @Field(() => UserGroupWhereInput, {nullable:true})
    @Type(() => UserGroupWhereInput)
    where?: UserGroupWhereInput;
}

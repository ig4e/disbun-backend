import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserGroupWhereInput } from './user-group-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserGroupArgs {

    @Field(() => UserGroupWhereInput, {nullable:true})
    @Type(() => UserGroupWhereInput)
    where?: UserGroupWhereInput;
}

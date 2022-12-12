import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupWhereInput } from './user-group-where.input';

@InputType()
export class UserGroupListRelationFilter {

    @Field(() => UserGroupWhereInput, {nullable:true})
    every?: UserGroupWhereInput;

    @Field(() => UserGroupWhereInput, {nullable:true})
    some?: UserGroupWhereInput;

    @Field(() => UserGroupWhereInput, {nullable:true})
    none?: UserGroupWhereInput;
}

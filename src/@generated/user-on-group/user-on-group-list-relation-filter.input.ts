import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupWhereInput } from './user-on-group-where.input';

@InputType()
export class UserOnGroupListRelationFilter {

    @Field(() => UserOnGroupWhereInput, {nullable:true})
    every?: UserOnGroupWhereInput;

    @Field(() => UserOnGroupWhereInput, {nullable:true})
    some?: UserOnGroupWhereInput;

    @Field(() => UserOnGroupWhereInput, {nullable:true})
    none?: UserOnGroupWhereInput;
}

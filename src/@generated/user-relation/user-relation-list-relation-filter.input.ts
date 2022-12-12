import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereInput } from './user-relation-where.input';

@InputType()
export class UserRelationListRelationFilter {

    @Field(() => UserRelationWhereInput, {nullable:true})
    every?: UserRelationWhereInput;

    @Field(() => UserRelationWhereInput, {nullable:true})
    some?: UserRelationWhereInput;

    @Field(() => UserRelationWhereInput, {nullable:true})
    none?: UserRelationWhereInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationWhereInput } from './user-relation-where.input';

@InputType()
export class UserRelationRelationFilter {

    @Field(() => UserRelationWhereInput, {nullable:true})
    is?: UserRelationWhereInput;

    @Field(() => UserRelationWhereInput, {nullable:true})
    isNot?: UserRelationWhereInput;
}

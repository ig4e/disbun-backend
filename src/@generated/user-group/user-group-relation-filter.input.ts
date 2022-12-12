import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGroupWhereInput } from './user-group-where.input';

@InputType()
export class UserGroupRelationFilter {

    @Field(() => UserGroupWhereInput, {nullable:true})
    is?: UserGroupWhereInput;

    @Field(() => UserGroupWhereInput, {nullable:true})
    isNot?: UserGroupWhereInput;
}

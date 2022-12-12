import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserGroupWhereInput } from './user-group-where.input';
import { Type } from 'class-transformer';
import { UserGroupOrderByWithRelationInput } from './user-group-order-by-with-relation.input';
import { UserGroupWhereUniqueInput } from './user-group-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserGroupScalarFieldEnum } from './user-group-scalar-field.enum';

@ArgsType()
export class FindFirstUserGroupOrThrowArgs {

    @Field(() => UserGroupWhereInput, {nullable:true})
    @Type(() => UserGroupWhereInput)
    where?: UserGroupWhereInput;

    @Field(() => [UserGroupOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserGroupOrderByWithRelationInput>;

    @Field(() => UserGroupWhereUniqueInput, {nullable:true})
    cursor?: UserGroupWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserGroupScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserGroupScalarFieldEnum>;
}

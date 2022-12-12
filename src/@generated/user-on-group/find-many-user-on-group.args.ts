import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserOnGroupWhereInput } from './user-on-group-where.input';
import { Type } from 'class-transformer';
import { UserOnGroupOrderByWithRelationInput } from './user-on-group-order-by-with-relation.input';
import { UserOnGroupWhereUniqueInput } from './user-on-group-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserOnGroupScalarFieldEnum } from './user-on-group-scalar-field.enum';

@ArgsType()
export class FindManyUserOnGroupArgs {

    @Field(() => UserOnGroupWhereInput, {nullable:true})
    @Type(() => UserOnGroupWhereInput)
    where?: UserOnGroupWhereInput;

    @Field(() => [UserOnGroupOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOnGroupOrderByWithRelationInput>;

    @Field(() => UserOnGroupWhereUniqueInput, {nullable:true})
    cursor?: UserOnGroupWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserOnGroupScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserOnGroupScalarFieldEnum>;
}

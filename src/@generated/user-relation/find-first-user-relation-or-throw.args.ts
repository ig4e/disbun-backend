import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRelationWhereInput } from './user-relation-where.input';
import { Type } from 'class-transformer';
import { UserRelationOrderByWithRelationInput } from './user-relation-order-by-with-relation.input';
import { UserRelationWhereUniqueInput } from './user-relation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserRelationScalarFieldEnum } from './user-relation-scalar-field.enum';

@ArgsType()
export class FindFirstUserRelationOrThrowArgs {

    @Field(() => UserRelationWhereInput, {nullable:true})
    @Type(() => UserRelationWhereInput)
    where?: UserRelationWhereInput;

    @Field(() => [UserRelationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserRelationOrderByWithRelationInput>;

    @Field(() => UserRelationWhereUniqueInput, {nullable:true})
    cursor?: UserRelationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserRelationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserRelationScalarFieldEnum>;
}

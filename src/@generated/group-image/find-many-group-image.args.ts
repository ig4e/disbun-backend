import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupImageWhereInput } from './group-image-where.input';
import { Type } from 'class-transformer';
import { GroupImageOrderByWithRelationInput } from './group-image-order-by-with-relation.input';
import { GroupImageWhereUniqueInput } from './group-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GroupImageScalarFieldEnum } from './group-image-scalar-field.enum';

@ArgsType()
export class FindManyGroupImageArgs {

    @Field(() => GroupImageWhereInput, {nullable:true})
    @Type(() => GroupImageWhereInput)
    where?: GroupImageWhereInput;

    @Field(() => [GroupImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GroupImageOrderByWithRelationInput>;

    @Field(() => GroupImageWhereUniqueInput, {nullable:true})
    cursor?: GroupImageWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GroupImageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GroupImageScalarFieldEnum>;
}

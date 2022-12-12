import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupImageWhereInput } from './group-image-where.input';

@InputType()
export class GroupImageRelationFilter {

    @Field(() => GroupImageWhereInput, {nullable:true})
    is?: GroupImageWhereInput;

    @Field(() => GroupImageWhereInput, {nullable:true})
    isNot?: GroupImageWhereInput;
}

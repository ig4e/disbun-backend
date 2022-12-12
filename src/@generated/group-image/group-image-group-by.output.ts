import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GroupImageCountAggregate } from './group-image-count-aggregate.output';
import { GroupImageMinAggregate } from './group-image-min-aggregate.output';
import { GroupImageMaxAggregate } from './group-image-max-aggregate.output';

@ObjectType()
export class GroupImageGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userGroupId!: string;

    @Field(() => GroupImageCountAggregate, {nullable:true})
    _count?: GroupImageCountAggregate;

    @Field(() => GroupImageMinAggregate, {nullable:true})
    _min?: GroupImageMinAggregate;

    @Field(() => GroupImageMaxAggregate, {nullable:true})
    _max?: GroupImageMaxAggregate;
}

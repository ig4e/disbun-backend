import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserGroupCountAggregate } from './user-group-count-aggregate.output';
import { UserGroupMinAggregate } from './user-group-min-aggregate.output';
import { UserGroupMaxAggregate } from './user-group-max-aggregate.output';

@ObjectType()
export class UserGroupGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => UserGroupCountAggregate, {nullable:true})
    _count?: UserGroupCountAggregate;

    @Field(() => UserGroupMinAggregate, {nullable:true})
    _min?: UserGroupMinAggregate;

    @Field(() => UserGroupMaxAggregate, {nullable:true})
    _max?: UserGroupMaxAggregate;
}

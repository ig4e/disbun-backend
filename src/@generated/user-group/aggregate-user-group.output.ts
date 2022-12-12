import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserGroupCountAggregate } from './user-group-count-aggregate.output';
import { UserGroupMinAggregate } from './user-group-min-aggregate.output';
import { UserGroupMaxAggregate } from './user-group-max-aggregate.output';

@ObjectType()
export class AggregateUserGroup {

    @Field(() => UserGroupCountAggregate, {nullable:true})
    _count?: UserGroupCountAggregate;

    @Field(() => UserGroupMinAggregate, {nullable:true})
    _min?: UserGroupMinAggregate;

    @Field(() => UserGroupMaxAggregate, {nullable:true})
    _max?: UserGroupMaxAggregate;
}

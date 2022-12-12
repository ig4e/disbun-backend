import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserOnGroupCountAggregate } from './user-on-group-count-aggregate.output';
import { UserOnGroupMinAggregate } from './user-on-group-min-aggregate.output';
import { UserOnGroupMaxAggregate } from './user-on-group-max-aggregate.output';

@ObjectType()
export class AggregateUserOnGroup {

    @Field(() => UserOnGroupCountAggregate, {nullable:true})
    _count?: UserOnGroupCountAggregate;

    @Field(() => UserOnGroupMinAggregate, {nullable:true})
    _min?: UserOnGroupMinAggregate;

    @Field(() => UserOnGroupMaxAggregate, {nullable:true})
    _max?: UserOnGroupMaxAggregate;
}

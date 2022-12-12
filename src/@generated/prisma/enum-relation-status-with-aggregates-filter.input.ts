import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelationStatus } from './relation-status.enum';
import { NestedEnumRelationStatusWithAggregatesFilter } from './nested-enum-relation-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRelationStatusFilter } from './nested-enum-relation-status-filter.input';

@InputType()
export class EnumRelationStatusWithAggregatesFilter {

    @Field(() => RelationStatus, {nullable:true})
    equals?: keyof typeof RelationStatus;

    @Field(() => [RelationStatus], {nullable:true})
    in?: Array<keyof typeof RelationStatus>;

    @Field(() => [RelationStatus], {nullable:true})
    notIn?: Array<keyof typeof RelationStatus>;

    @Field(() => NestedEnumRelationStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRelationStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRelationStatusFilter, {nullable:true})
    _min?: NestedEnumRelationStatusFilter;

    @Field(() => NestedEnumRelationStatusFilter, {nullable:true})
    _max?: NestedEnumRelationStatusFilter;
}

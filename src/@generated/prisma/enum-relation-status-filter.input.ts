import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelationStatus } from './relation-status.enum';
import { NestedEnumRelationStatusFilter } from './nested-enum-relation-status-filter.input';

@InputType()
export class EnumRelationStatusFilter {

    @Field(() => RelationStatus, {nullable:true})
    equals?: keyof typeof RelationStatus;

    @Field(() => [RelationStatus], {nullable:true})
    in?: Array<keyof typeof RelationStatus>;

    @Field(() => [RelationStatus], {nullable:true})
    notIn?: Array<keyof typeof RelationStatus>;

    @Field(() => NestedEnumRelationStatusFilter, {nullable:true})
    not?: NestedEnumRelationStatusFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationType } from '../user/user-relation-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserRelationTypeFilter } from './nested-enum-user-relation-type-filter.input';

@InputType()
export class NestedEnumUserRelationTypeWithAggregatesFilter {

    @Field(() => UserRelationType, {nullable:true})
    equals?: keyof typeof UserRelationType;

    @Field(() => [UserRelationType], {nullable:true})
    in?: Array<keyof typeof UserRelationType>;

    @Field(() => [UserRelationType], {nullable:true})
    notIn?: Array<keyof typeof UserRelationType>;

    @Field(() => NestedEnumUserRelationTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserRelationTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserRelationTypeFilter, {nullable:true})
    _min?: NestedEnumUserRelationTypeFilter;

    @Field(() => NestedEnumUserRelationTypeFilter, {nullable:true})
    _max?: NestedEnumUserRelationTypeFilter;
}

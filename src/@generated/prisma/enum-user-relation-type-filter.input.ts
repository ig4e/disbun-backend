import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationType } from '../user/user-relation-type.enum';
import { NestedEnumUserRelationTypeFilter } from './nested-enum-user-relation-type-filter.input';

@InputType()
export class EnumUserRelationTypeFilter {

    @Field(() => UserRelationType, {nullable:true})
    equals?: keyof typeof UserRelationType;

    @Field(() => [UserRelationType], {nullable:true})
    in?: Array<keyof typeof UserRelationType>;

    @Field(() => [UserRelationType], {nullable:true})
    notIn?: Array<keyof typeof UserRelationType>;

    @Field(() => NestedEnumUserRelationTypeFilter, {nullable:true})
    not?: NestedEnumUserRelationTypeFilter;
}

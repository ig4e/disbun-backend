import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumRelationStatusWithAggregatesFilter } from '../prisma/enum-relation-status-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserRelationScalarWhereWithAggregatesInput {

    @Field(() => [UserRelationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserRelationScalarWhereWithAggregatesInput>;

    @Field(() => [UserRelationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserRelationScalarWhereWithAggregatesInput>;

    @Field(() => [UserRelationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserRelationScalarWhereWithAggregatesInput>;

    @Field(() => EnumRelationStatusWithAggregatesFilter, {nullable:true})
    status?: EnumRelationStatusWithAggregatesFilter;

    @HideField()
    relatedUserId?: StringWithAggregatesFilter;

    @HideField()
    userId?: StringWithAggregatesFilter;
}

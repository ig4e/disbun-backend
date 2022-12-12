import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class GroupImageScalarWhereWithAggregatesInput {

    @Field(() => [GroupImageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GroupImageScalarWhereWithAggregatesInput>;

    @Field(() => [GroupImageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GroupImageScalarWhereWithAggregatesInput>;

    @Field(() => [GroupImageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GroupImageScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userGroupId?: StringWithAggregatesFilter;
}

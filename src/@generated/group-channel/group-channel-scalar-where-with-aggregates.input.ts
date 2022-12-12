import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class GroupChannelScalarWhereWithAggregatesInput {

    @Field(() => [GroupChannelScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GroupChannelScalarWhereWithAggregatesInput>;

    @Field(() => [GroupChannelScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GroupChannelScalarWhereWithAggregatesInput>;

    @Field(() => [GroupChannelScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GroupChannelScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @HideField()
    userGroupId?: StringWithAggregatesFilter;
}

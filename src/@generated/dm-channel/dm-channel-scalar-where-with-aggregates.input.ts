import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class DmChannelScalarWhereWithAggregatesInput {

    @Field(() => [DmChannelScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DmChannelScalarWhereWithAggregatesInput>;

    @Field(() => [DmChannelScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DmChannelScalarWhereWithAggregatesInput>;

    @Field(() => [DmChannelScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DmChannelScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userRelationRelatedUserId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userRelationUserId?: StringWithAggregatesFilter;
}

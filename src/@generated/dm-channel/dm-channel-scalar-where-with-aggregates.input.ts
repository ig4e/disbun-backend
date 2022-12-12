import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

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

    @HideField()
    userRelationRelatedUserId?: StringWithAggregatesFilter;

    @HideField()
    userRelationUserId?: StringWithAggregatesFilter;
}

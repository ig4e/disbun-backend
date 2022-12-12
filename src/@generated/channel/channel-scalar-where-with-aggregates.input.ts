import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumChannelTypeWithAggregatesFilter } from '../prisma/enum-channel-type-with-aggregates-filter.input';

@InputType()
export class ChannelScalarWhereWithAggregatesInput {

    @Field(() => [ChannelScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ChannelScalarWhereWithAggregatesInput>;

    @Field(() => [ChannelScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ChannelScalarWhereWithAggregatesInput>;

    @Field(() => [ChannelScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ChannelScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumChannelTypeWithAggregatesFilter, {nullable:true})
    type?: EnumChannelTypeWithAggregatesFilter;
}

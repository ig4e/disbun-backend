import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumChannelTypeWithAggregatesFilter } from '../prisma/enum-channel-type-with-aggregates-filter.input';

@InputType()
export class ChannelDmScalarWhereWithAggregatesInput {

    @Field(() => [ChannelDmScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ChannelDmScalarWhereWithAggregatesInput>;

    @Field(() => [ChannelDmScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ChannelDmScalarWhereWithAggregatesInput>;

    @Field(() => [ChannelDmScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ChannelDmScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumChannelTypeWithAggregatesFilter, {nullable:true})
    type?: EnumChannelTypeWithAggregatesFilter;
}

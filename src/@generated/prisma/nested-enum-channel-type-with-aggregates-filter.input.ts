import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelType } from './channel-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumChannelTypeFilter } from './nested-enum-channel-type-filter.input';

@InputType()
export class NestedEnumChannelTypeWithAggregatesFilter {

    @Field(() => ChannelType, {nullable:true})
    equals?: keyof typeof ChannelType;

    @Field(() => [ChannelType], {nullable:true})
    in?: Array<keyof typeof ChannelType>;

    @Field(() => [ChannelType], {nullable:true})
    notIn?: Array<keyof typeof ChannelType>;

    @Field(() => NestedEnumChannelTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumChannelTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumChannelTypeFilter, {nullable:true})
    _min?: NestedEnumChannelTypeFilter;

    @Field(() => NestedEnumChannelTypeFilter, {nullable:true})
    _max?: NestedEnumChannelTypeFilter;
}

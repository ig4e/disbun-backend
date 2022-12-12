import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelType } from './channel-type.enum';
import { NestedEnumChannelTypeFilter } from './nested-enum-channel-type-filter.input';

@InputType()
export class EnumChannelTypeFilter {

    @Field(() => ChannelType, {nullable:true})
    equals?: keyof typeof ChannelType;

    @Field(() => [ChannelType], {nullable:true})
    in?: Array<keyof typeof ChannelType>;

    @Field(() => [ChannelType], {nullable:true})
    notIn?: Array<keyof typeof ChannelType>;

    @Field(() => NestedEnumChannelTypeFilter, {nullable:true})
    not?: NestedEnumChannelTypeFilter;
}

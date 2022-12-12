import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupChannelWhereInput } from './group-channel-where.input';
import { Type } from 'class-transformer';
import { GroupChannelOrderByWithRelationInput } from './group-channel-order-by-with-relation.input';
import { GroupChannelWhereUniqueInput } from './group-channel-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GroupChannelCountAggregateInput } from './group-channel-count-aggregate.input';
import { GroupChannelMinAggregateInput } from './group-channel-min-aggregate.input';
import { GroupChannelMaxAggregateInput } from './group-channel-max-aggregate.input';

@ArgsType()
export class GroupChannelAggregateArgs {

    @Field(() => GroupChannelWhereInput, {nullable:true})
    @Type(() => GroupChannelWhereInput)
    where?: GroupChannelWhereInput;

    @Field(() => [GroupChannelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GroupChannelOrderByWithRelationInput>;

    @Field(() => GroupChannelWhereUniqueInput, {nullable:true})
    cursor?: GroupChannelWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GroupChannelCountAggregateInput, {nullable:true})
    _count?: GroupChannelCountAggregateInput;

    @Field(() => GroupChannelMinAggregateInput, {nullable:true})
    _min?: GroupChannelMinAggregateInput;

    @Field(() => GroupChannelMaxAggregateInput, {nullable:true})
    _max?: GroupChannelMaxAggregateInput;
}

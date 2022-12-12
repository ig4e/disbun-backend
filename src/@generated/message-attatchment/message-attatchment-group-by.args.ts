import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageAttatchmentWhereInput } from './message-attatchment-where.input';
import { Type } from 'class-transformer';
import { MessageAttatchmentOrderByWithAggregationInput } from './message-attatchment-order-by-with-aggregation.input';
import { MessageAttatchmentScalarFieldEnum } from './message-attatchment-scalar-field.enum';
import { MessageAttatchmentScalarWhereWithAggregatesInput } from './message-attatchment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MessageAttatchmentCountAggregateInput } from './message-attatchment-count-aggregate.input';
import { MessageAttatchmentAvgAggregateInput } from './message-attatchment-avg-aggregate.input';
import { MessageAttatchmentSumAggregateInput } from './message-attatchment-sum-aggregate.input';
import { MessageAttatchmentMinAggregateInput } from './message-attatchment-min-aggregate.input';
import { MessageAttatchmentMaxAggregateInput } from './message-attatchment-max-aggregate.input';

@ArgsType()
export class MessageAttatchmentGroupByArgs {

    @Field(() => MessageAttatchmentWhereInput, {nullable:true})
    @Type(() => MessageAttatchmentWhereInput)
    where?: MessageAttatchmentWhereInput;

    @Field(() => [MessageAttatchmentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MessageAttatchmentOrderByWithAggregationInput>;

    @Field(() => [MessageAttatchmentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MessageAttatchmentScalarFieldEnum>;

    @Field(() => MessageAttatchmentScalarWhereWithAggregatesInput, {nullable:true})
    having?: MessageAttatchmentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MessageAttatchmentCountAggregateInput, {nullable:true})
    _count?: MessageAttatchmentCountAggregateInput;

    @Field(() => MessageAttatchmentAvgAggregateInput, {nullable:true})
    _avg?: MessageAttatchmentAvgAggregateInput;

    @Field(() => MessageAttatchmentSumAggregateInput, {nullable:true})
    _sum?: MessageAttatchmentSumAggregateInput;

    @Field(() => MessageAttatchmentMinAggregateInput, {nullable:true})
    _min?: MessageAttatchmentMinAggregateInput;

    @Field(() => MessageAttatchmentMaxAggregateInput, {nullable:true})
    _max?: MessageAttatchmentMaxAggregateInput;
}

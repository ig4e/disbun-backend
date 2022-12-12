import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelDmWhereInput } from './channel-dm-where.input';
import { Type } from 'class-transformer';
import { ChannelDmOrderByWithRelationInput } from './channel-dm-order-by-with-relation.input';
import { ChannelDmWhereUniqueInput } from './channel-dm-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChannelDmScalarFieldEnum } from './channel-dm-scalar-field.enum';

@ArgsType()
export class FindFirstChannelDmArgs {

    @Field(() => ChannelDmWhereInput, {nullable:true})
    @Type(() => ChannelDmWhereInput)
    where?: ChannelDmWhereInput;

    @Field(() => [ChannelDmOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChannelDmOrderByWithRelationInput>;

    @Field(() => ChannelDmWhereUniqueInput, {nullable:true})
    cursor?: ChannelDmWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ChannelDmScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ChannelDmScalarFieldEnum>;
}

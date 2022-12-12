import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DmChannelWhereInput } from './dm-channel-where.input';
import { Type } from 'class-transformer';
import { DmChannelOrderByWithRelationInput } from './dm-channel-order-by-with-relation.input';
import { DmChannelWhereUniqueInput } from './dm-channel-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DmChannelScalarFieldEnum } from './dm-channel-scalar-field.enum';

@ArgsType()
export class FindManyDmChannelArgs {

    @Field(() => DmChannelWhereInput, {nullable:true})
    @Type(() => DmChannelWhereInput)
    where?: DmChannelWhereInput;

    @Field(() => [DmChannelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DmChannelOrderByWithRelationInput>;

    @Field(() => DmChannelWhereUniqueInput, {nullable:true})
    cursor?: DmChannelWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DmChannelScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DmChannelScalarFieldEnum>;
}
